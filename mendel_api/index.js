// verify fetch exist. In case NO then we are running in node js so use node-fetch implementation

"use strict";

const MendelBase = require('../MendelBase');


/**
 * Mendel API client interface
 */
class MendelApi extends MendelBase {

  /******************************************* ACCOUNTS IMPLEMENTATION *******************************/

  Accounts = {

    /**
     *
     * @returns {*}
     */
    get() {
      return this.parent.getAuthenticate(`${api}/accounts`);
    },

    /**
     *
     * @param accountId
     * @param contactId
     * @param data
     * @returns {Promise<Response>}
     */
    update({accountId, data}) {
      return this.parent.put(`${api}/accounts/${accountId}`, data);
    },

    /**
     *
     * @param accountId
     * @param contactId
     * @returns {Promise<Response>}
     */
    getById({accountId}) {
      return this.parent.getAuthenticate(`${api}/accounts/${accountId}`)
    },

    /**
     *
     * @param firstname
     * @param lastname
     * @returns {Promise<Response>}
     */
    add({firstname, lastname}) {
      return this.parent.post(`${api}/accounts/`, {firstname, lastname});
    }
    ,
  };
  /******************************************* CONTACTS IMPLEMENTATION *******************************/

  Contacts = {

    /**
     *
     * @param accountId
     * @returns {Promise<Response>}
     */
    get(accountId) {
      return this.parent.getAuthenticate(`${api}/accounts/${accountId}/contacts`);
    },

    /**
     *
     * @param accountId
     * @param contactId
     * @param data
     * @returns {Promise<Response>}
     */
    update({accountId, contactId, data}) {
      return this.parent.put(`${api}/accounts/${accountId}/contacts/${contactId}`, data);
    },

    /**
     *
     * @param accountId
     * @param contactId
     * @returns {Promise<Response>}
     */
    getById({accountId, contactId}) {
      return this.parent.getAuthenticate(`${api}/accounts/${accountId}/contacts/${contactId}`)
    },

    /**
     *
     * @param firstname
     * @param lastname
     * @returns {Promise<Response>}
     */
    add({accountId, firstname, lastname, email}) {
      return this.parent.post(`${api}/accounts/${accountId}/contacts`, {firstname, lastname, email});
    },
  };

  /******************************************* ORDERS IMPLEMENTATION **************************************/
  Orders = {

    add({accountId, contactid}) {
      return this.parent.post(`${api}/accounts/${accountId}/contacts/${contactid}/orders`, {contactid});
    },
    update({accountId, contactId, orderId, data}) {
      return this.parent.put(`${api}/accounts/${accountId}/contacts/${contactId}/orders/${orderId}`, data);
    },

    getById({accountId, contactId, orderId}) {
      return this.parent.get(`${api}/accounts/${accountId}/contacts/${contactId}/orders/${orderId}`);
    },
  };

  /**
   *
   * @param base_url
   */
  constructor(base_url) {
    super(base_url);
    this.base_url = base_url;
    this.Contacts.parent = this;
    this.Orders.parent = this;
    this.Accounts.parent = this;
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
