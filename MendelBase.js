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
  static auth_token = null;

  /**
   *
   * @type {user}
   */
  static user = null;

  /**
   *
   * @type {string}
   */
  login_url_part = null;

  /**
   * MendelBioApi constructor
   * @param base_url
   */
  constructor(base_url, security_url) {
    let url = new URL(base_url);
    this.base_url = `${url.protocol}//${url.host}` + url.pathname;
    this.security_url = security_url;

    if (!security_url) {
      this.security_url = this.base_url;
    }

  }

  toJsonOrError(res) {
    if (res.status != 200) {
      throw {error: res.status, message: res.statusText};
    }
    return res.json();
  }

  /**
   * Checks if the authentication token is acquired. In case NO, throws and exception.
   */
  checkAuthenticated() {
    if (MendelBase.auth_token == null) {
      throw {error: 300, message: "Authentication required before make any Mendel BIO API call"};
    }
  }

  /**
   * Perform a firebase login to convert the FB token into an mendel_bio_api service token.
   * @param login_info : To be passed on the req.body with firebase auth token.
   * @returns {Promise<boolean>} True if the valid token is received, false ioc.
   */

  login(token) {
    return fetch(this.security_url + "/login/firebase", {
      method: "POST",
      body: JSON.stringify(token),
      headers: {"Content-Type": "application/json"}
    })
        .then(res => this.toJsonOrError(res))
        .then(response => {
          MendelBase.auth_token = response["authToken"] || response["x-authtoken"];
          MendelBase.user = response["user"];
          return {authToken: MendelBase.auth_token, user: MendelBase.user};
        });
  }

  /**
   * Perform a vault login to convert the Valut token into an mendel_bio_api service token.
   * @param login_info : To be passed on the req.body with vault auth token.
   * @returns {Promise<boolean>} True if the valid token is received, false ioc.
   */
  login_vault(token) {
    return fetch(this.security_url + "/login/vault", {
      method: "POST",
      body: JSON.stringify(token),
      headers: {"Content-Type": "application/json"}
    })
        .then(res => this.toJsonOrError(res))
        .then(response => {
          MendelBase.auth_token = response["authToken"] || response["x-authtoken"];
          MendelBase.user = response["user"];
          return {auth_Token: MendelBase.auth_token, user: MendelBase.user};
        });
  }

  /**
   * Perform a fake login using and mydnamap user email
   * @param email : mydnamap user email
   * @returns {Promise<boolean>} True if the valid token is received, false ioc.
   */

  loginFake(email) {

    return this.get(this.security_url.replace("v1", "dev") + `/login/fake/${email}`)
        .then(response => {
          MendelBase.auth_token = response["authToken"] || response["x-authtoken"];
          MendelBase.user = response["user"];
          return {auth_Token: MendelBase.auth_token, user: MendelBase.user};
        });
  }

  loginAppKey(appid, appkey) {
    let idkey = {
      appid: appid,
      appkey: appkey
    }

    return fetch(this.security_url + "/login/appkey", {
      method: "POST",
      body: JSON.stringify(idkey),
      headers: {"Content-Type": "application/json"}
    })
        .then(res => this.toJsonOrError(res))
        .then(response => {
          MendelBase.auth_token = response["authToken"] || response["x-authtoken"];
          MendelBase.user = response["user"];

          setTimeout(()=> { // Renew Security Tocken
            logger.info("Renewing AppKey Tocken ..")
            this.loginAppKey(appid,appkey);
          } , 1000 * 60 * 60 * 24)

          return {auth_Token: MendelBase.auth_token, user: MendelBase.user};
        })
        .catch(err => {
          throw err;
        });
  }

  get(url, body = null) {
    let options = {
      method: "GET",
      body: body,
      headers: {
        "Content-Type": "application/json",
      }
    }

    if (MendelBase.auth_token) {
      options.headers["x-authtoken"] = MendelBase.auth_token
    }

    let realurl = url.indexOf('http://') != -1 ? url : this.base_url + url;
    return fetch(realurl, options)
        .then(res => this.toJsonOrError(res))
  }

  getAuthenticate(url) {
    this.checkAuthenticated();
    return this.get(url)
  }

  put(url, data) {
    this.checkAuthenticated();

    let options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",

      }
    }

    if (MendelBase.auth_token) {
      options.headers["x-authtoken"] = MendelBase.auth_token
    }

    return fetch(this.base_url + url, options)
        .then(res => this.toJsonOrError(res))
  }

  delete(url, data) {
    this.checkAuthenticated();

    let options = {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",

      }
    }

    if (MendelBase.auth_token) {
      options.headers["x-authtoken"] = MendelBase.auth_token
    }

    return fetch(this.base_url + url, options)
        .then(res => this.toJsonOrError(res))
  }

  post(url, data) {

    let options = {
      method: "POST",
      body: data ? JSON.stringify(data) : null,
      headers: {
        "Content-Type": "application/json",
        "x-authtoken": MendelBase.auth_token
      }
    }

    if (MendelBase.auth_token) {
      options.headers["x-authtoken"] = MendelBase.auth_token
    }
    return fetch(this.base_url + url, options)
        .then(res => this.toJsonOrError(res))
  }
}

module.exports = MendelBase;