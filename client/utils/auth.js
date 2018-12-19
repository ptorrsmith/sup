const decode = require("jwt-decode");

import { get, set } from "./localstorage";

export function isAuthenticated() {
  const token = get("token");

  if (token) {
    const payload = decode(token);
    const expiry = payload.exp;

    if (expiry < new Date().getTime() / 1000) {
      removeUser();
      return false;
    }
    return true;
  } else {
    return false;
  }
}

export function saveUserToken(token) {
  set("token", token);
  return decode(token);
}

export function getUserTokenInfo() {
  const token = get("token");
  return token ? decode(token) : null;
}

export function removeUser() {
  set("token", null);
}

export function authFetch(url, params) {
  if (!params) {
    params = { headers: {} }
  }

  const token = get("token");
  // if(auth == yes) {
  if (token) {
    params.headers["Authorization"] = `Bearer ${token}`;
  }
  // }
  console.log("fetching with params of ", params)

  return fetch(url, params);
}
