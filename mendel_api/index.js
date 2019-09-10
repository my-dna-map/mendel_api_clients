// verify fetch exist. In case NO then we are running in node js so use node-fetch implementation

"use strict";

const MendelBase = require('../MendelBase');


/**
 * Mendel API client interface
 */
class MendelApi extends MendelBase {

  /******************************************* ORDERS IMPLEMENTATION **************************************/

  Contacts = {

    /******************************************* CONTACTS IMPLEMENTATION *******************************/
    /**
     *
     * @param accountId
     * @returns {Promise<Response>}
     */
    get(accountId) {
      return fetch(`${api}/accounts/${accountId}/contacts`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "x-authtoken": this.auth_token
        }
      })
          .then(res => this.toJsonOrError(res))
    },

    /**
     *
     * @param accountId
     * @param contactId
     * @param data
     * @returns {Promise<Response>}
     */
    update({accountId, contactId, data}) {
      return fetch(`${api}/accounts/${accountId}/contacts/${contactId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "x-authtoken": this.auth_token
        }
      })
          .then(res => this.toJsonOrError(res))
    },

    /**
     *
     * @param accountId
     * @param contactId
     * @returns {Promise<Response>}
     */
    getById({accountId, contactId}) {
      return fetch(`${api}/accounts/${accountId}/contacts/${contactId}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "x-authtoken": this.auth_token
        }
      })
          .then(res => this.toJsonOrError(res))
    },

    /**
     *
     * @param firstname
     * @param lastname
     * @returns {Promise<Response>}
     */
    add({accountId, firstname, lastname}) {
      return fetch(`${api}/accounts/${accountId}/contacts`, {
        method: 'POST',
        body: JSON.stringify({firstname, lastname}),
        headers: {
          "Content-Type": "application/json",
          "x-authtoken": this.auth_token
        }
      })
          .then(res => this.toJsonOrError(res))
    },
  };
  Order = {
    add({accountId, contactid}) {
      return fetch(`${api}/accounts/${accountId}/contacts/${contactid}/orders`, {
        method: 'POST',
        body: JSON.stringify({contactid}),
        headers: {
          "Content-Type": "application/json",
          "x-authtoken": this.auth_token
        }
      })
          .then(res => this.toJsonOrError(res))
    },
    update({accountId, contactId, orderId, data}) {
      return fetch(`${api}/accounts/${accountId}/contacts/${contactId}/orders/${orderId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "x-authtoken": this.auth_token
        }
      })
          .then(res => this.toJsonOrError(res))
    },

    getById({accountId, contactId, orderId}) {
      return fetch(`${api}/accounts/${accountId}/contacts/${contactId}/orders/${orderId}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "x-authtoken": this.auth_token
        }
      })
          .then(res => this.toJsonOrError(res))
    },
  };

  /**
   *
   * @param base_url
   */
  constructor(base_url) {
    super(base_url);
    this.base_url = base_url;
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
}


//export default MendelApi;

module.exports = MendelApi;
