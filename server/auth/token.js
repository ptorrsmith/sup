var jwt = require("jsonwebtoken");
var { getUserByName } = require("../data/users");
var { getServicesForProviders } = require('../data/servicesDB')
var verifyJwt = require("express-jwt");
var { compare } = require("./hash");

function issue(req, res) {
  getUserByName(req.body.user_name, req.app.get("db")).then(user => {
    if (!user) return res.status(403).json({ message: "User does not exist" });
    compare(req.body.password, user.hash, (err, match) => {
      if (err) res.status(500).json({ message: err.message });
      else if (!match)
        res.status(400).json({ message: "Password is incorrect" });
      else {
        var token = createToken(user, process.env.JWT_SECRET);
        res.json({
          message: "Authentication successful",
          token,
          providerId: user.provider_id
        });
      }
    });
  });
}

function createToken(user, secret) {
  return jwt.sign(
    {
      user_id: user.user_id,
      user_name: user.user_name
    },
    secret,
    {
      expiresIn: "24h"
    }
  );
}

function getSecret(req, payload, done) {
  done(null, process.env.JWT_SECRET);
}

function decode(req, res, next) {
  verifyJwt({ secret: getSecret })(req, res, next);
}

function decodeIfToken(req, res, next) {
  verifyJwt({ secret: getSecret, credentialsRequired: false })(req, res, next);
}



//These could be refined better
function decodeIfAdmin(req, res, next) {
  verifyJwt({ secret: getSecret })(req, res, () => { checkIfAdmin(req, res, next) });
}
function checkIfAdmin(req, res, next) {
  if (!req.user) {
    res.status(401).json({ message: "Unauthorized Attempt" })
    return
  }
  getUserByName(req.user.user_name).then((data) => {
    if (!(data.provider_id < 0)) {
      res.status(401).json({ message: "Unauthorized Attempt" })
    }
    else {
      next();
    }
  })
}

//These could be refined better
function decodeAndFindServices(req, res, next) {
  verifyJwt({ secret: getSecret })(req, res, () => { checkAndGetServices(req, res, next) });
}
function checkAndGetServices(req, res, next) {
  if (!req.user) {
    res.status(401).json({ message: "Unauthorized Attempt" })
    return
  }
  getUserByName(req.user.user_name).then((data) => {
    let id = data.provider_id;
    return getServicesForProviders([id])
  }).then((data) => {

    let serviceIds = data.map((service) => { return service.id })
    req.user.serviceIds = serviceIds
    next();
  })
}



//These could be refined better
function decodeAndFindId(req, res, next) {
  verifyJwt({ secret: getSecret })(req, res, () => { checkAndGetID(req, res, next) });
}
//These could be refined better
function checkAndGetID(req, res, next) {

  if (!req.user) {
    res.status(401).json({ message: "Unauthorized Attempt" })
    return
  }
  getUserByName(req.user.user_name).then((data) => {
    req.user.provider_id = data.provider_id


    const id = req.params.id

    if (req.user.provider_id < 0) {
      console.log("I'm Admin " + req.user.user_name + " I do what i want")
    }
    else if (req.user.provider_id != id) {
      console.log("Unauthorized Attempt by " + req.user.user_name + " " + req.user.provider_id + " to change " + id)
      res.status(401).json({ message: "Unauthorized Attempt" })
      return
    }
    next();
  })
}

module.exports = {
  issue,
  createToken,
  decode,
  decodeIfToken,

  decodeAndFindId,
  decodeAndFindServices,
  decodeIfAdmin
};
