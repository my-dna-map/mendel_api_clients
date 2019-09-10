"use strict";

if (typeof fetch === "undefined") {
  global.fetch = require("node-fetch");
}

/**
 * Mendel BIP API client interface
 */
class MendelBase {
  /**
   * Base Url for all Mendel BIO API calls.
   * @type {string`}
   */
  base_url = null;

  /**
   * Auth token to be included in all Mendel BIO API calls
   * @type {null}
   */
  auth_token = null;

  /**
   *
   * @type {user}
   */
  user = null;

  /**
   *
   * @type {string}
   */
  login_url_part = null;

  /**
   * MendelBioApi constructor
   * @param base_url
   */
  constructor(base_url) {
    let url = new URL(base_url);
    this.base_url = `${url.protocol}://${url.host}` + url.pathname;
  }

  /**
   * Checks if the authentication token is acquired. In case NO, throws and exception.
   */
  checkAuthenticated() {
    if (this.auth_token == null) {
      throw {error: 300, message: "Authentication required before make any Mendel BIO API call"};
    }
  }

  /**
   * Perform a firebase login to convert the FB token into an mendel_bio_api service token.
   * @param login_info : To be passed on the req.body with firebase auth token.
   * @returns {Promise<boolean>} True if the valid token is received, false ioc.
   */

  login(token) {
    return fetch(this.base_url + "/login/firebase", {
      method: "POST",
      body: JSON.stringify(token),
      headers: {"Content-Type": "application/json"}
    })
        .then(res => {
          if (res.status != 200) {
            throw {error: res.status, message: res.statusText};
          }
          return res.json();
        })
        .then(response => {
          this.auth_token = response["x-authtoken"];
          this.user = response["user"];
          return {authToken: this.auth_Token, user: this.user};
        });
  }

  /**
   * Perform a vault login to convert the Valut token into an mendel_bio_api service token.
   * @param login_info : To be passed on the req.body with vault auth token.
   * @returns {Promise<boolean>} True if the valid token is received, false ioc.
   */
  login_vault(token) {
    return fetch(this.base_url + "/login/vault", {
      method: "POST",
      body: JSON.stringify(token),
      headers: {"Content-Type": "application/json"}
    })
        .then(res => {
          if (res.status != 200) {
            throw {error: res.status, message: res.statusText};
          }
          return res.json();
        })
        .then(response => {
          this.auth_token = response["x-authtoken"];
          this.user = response["user"];
          return {auth_Token: this.auth_Token, user: this.user};
        });
  }

  /**
   * Perform a fake login using and mydnamap user email
   * @param email : mydnamap user email
   * @returns {Promise<boolean>} True if the valid token is received, false ioc.
   */

  loginFake(email) {
    return fetch(this.base_url.replace("v1", "dev") + `/login/fake/${email}`, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    })
        .then(res => {
          if (res.status != 200) {
            throw {error: res.status, message: res.statusText};
          }
          return res.json();
        })
        .then(response => {
          this.auth_token = response["x-authtoken"];
          this.user = response["user"];
          return {auth_Token: this.auth_token, user: this.user};
        });
  }
}

module.exports = MendelBase;