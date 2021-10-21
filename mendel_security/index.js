// verify fetch exist. In case NO then we are running in node js so use node-fetch implementation

"use strict";

const MendelBase = require('../MendelBase');

/**
 * Mendel BIP API client interface
 */

class MendelSecurity extends MendelBase {

  /**
   * Base Url for all Mendel BIO API calls.
   * @type {string`}
   */

  base_url = null;


  /**
   *
   * @param base_url
   */

  constructor(base_url) {
    super(base_url, base_url);
    this.base_url = base_url;
  }

  isValidToken(token) {
    return this.post("/token/isValidToken",{token:token});
  }

  decode(token) {
    return this.post("/token/decode",{token:token});
  }

  encode(token) {
    return this.post("/token/encode",{token:token});
  }

  async renew(token) {
    let retvalue = await this.post("/token/renew",{token:token});

    MendelBase.auth_token = retvalue.token;
    this.user = retvalue.user;

    return retvalue;
  }
}

module.exports = MendelSecurity;
