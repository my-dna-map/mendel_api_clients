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

  /**
   *
   * @param accountId
   * @returns {Promise<Response>}
   */
  getContacts(accountId) {
    return fetch(`${api}/accounts/${accountId}/contacts`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "x-authtoken": this.auth_token
      }
    })
  }

  /**
   *
   * @param accountId
   * @param contactId
   * @param data
   * @returns {Promise<Response>}
   */
  updateUser({accountId, contactId, data}) {
    return fetch(`${api}/accounts/${accountId}/contacts/${contactId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-authtoken": this.auth_token
      }
    })
  }

  /**
   *
   * @param token
   * @returns {Promise<void>}
   */
  registerPush() {
    // TODO
    return Promise.resolve()
  }

  /**
   *
   * @param token
   * @param firstname
   * @param lastname
   * @returns {Promise<Response>}
   */
  registerUser({firstname, lastname}) {
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
