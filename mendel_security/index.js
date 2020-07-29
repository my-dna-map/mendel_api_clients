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
    super(base_url,base_url);
    this.base_url = base_url;
  }
}

module.exports = MendelBioApi;
