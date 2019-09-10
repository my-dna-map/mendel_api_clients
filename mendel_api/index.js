// verify fetch exist. In case NO then we are running in node js so use node-fetch implementation

"use strict";

const MendelBase = require('../MendelBase');

/**
 * Mendel API client interface
 */
class MendelApi extends MendelBase {
  /**
   * Base Url for all Mendel BIO API calls.
   * @type {string`}
   */
  base_url = null;


  constructor(base_url) {
    super(base_url);
    this.base_url = base_url;
  }

  static getContacts(accountId) {
    return fetch(`${api}/accounts/${accountId}/contacts`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "x-authtoken": this.auth_token
      }
    })
  }

  static updateUser({accountId, contactId, data}) {
    return fetch(`${api}/accounts/${accountId}/contacts/${contactId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-authtoken": this.auth_token
      }
    })
  }

  static registerPush({token}) {
    // TODO
    return Promise.resolve()
  }

  registerUser({token, firstname, lastname}) {
    return fetch(`${api}/accounts`, {
      method: 'POST',
      body: JSON.stringify({firstname, lastname}),
      headers: {
        "Content-Type": "application/json",
        "x-authtoken": this.auth_token
      }
    });

  }
}

//export default MendelApi;

module.exports = MendelApi;
