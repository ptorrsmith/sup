var jwt = require("jsonwebtoken");
var { getUserByName } = require("../data/users");
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

module.exports = {
  issue,
  createToken,
  decode,
  decodeIfToken
};
