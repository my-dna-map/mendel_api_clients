// verify fetch exist. In case NO then we are running in node js so use node-fetch implementation

"use strict";

const MendelBase = require('../MendelBase');

/**
 * Mendel BIP API client interface
 */

class MendelBAMApi extends MendelBase {

  all ()  {
    return this.get( this.base_url+"/context/all");
  }
}

module.exports = MendelBAMApi;