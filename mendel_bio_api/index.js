// verify fetch exist. In case NO then we are running in node js so use node-fetch implementation

"use strict";

if (typeof fetch === "undefined") {
  global.fetch = require("node-fetch");
}

/**
 * Mendel BIP API client interface
 */
class MendelBioApi {
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
   * MendelBioApi constructor
   * @param base_url
   */
  constructor(base_url) {
    this.base_url = base_url;
  }

  /**
   * Checks if the authentication token is acquired. In case NO, throws and exception.
   */
  checkAuthenticated() {
    if (this.auth_token == null) {
      throw "Authentication reqired before make any Mendel BIO API call";
    }
  }

  /**
   * Perform a firebase login to convert the FB token into an mendel_bio_api service token.
   * @param login_info : To be passed on the req.body with firebase auth token.
   * @returns {Promise<boolean>} True if the valid token is received, false ioc.
   */

  auth_firebase(login_info) {
    return fetch(this.base_url + "mendel/bio/v1/login/firebase", {
      method: "POST",
      body: JSON.stringify(login_info),
      headers: {"Content-Type": "application/json"}
    })
        .then(res => res.json())
        .then(response => {
          this.auth_token = response["x-authtoken"];
          return response["x-authtoken"] != null;
        });
  }

  /**
   * Perform a vault login to convert the Valut token into an mendel_bio_api service token.
   * @param login_info : To be passed on the req.body with vault auth token.
   * @returns {Promise<boolean>} True if the valid token is received, false ioc.
   */
  auth_vault(login_info) {
    return fetch(this.base_url + "mendel/bio/v1/login/vault", {
      method: "POST",
      body: JSON.stringify(login_info),
      headers: {"Content-Type": "application/json"}
    })
        .then(res => res.json())
        .then(response => {
          this.auth_token = response["x-authtoken"];
          return response["x-authtoken"] != null;
        });
  }

  /**
   * Perform a fake login using and mydnamap user email
   * @param email : mydnamap user email
   * @returns {Promise<boolean>} True if the valid token is received, false ioc.
   */

  fakeLogin(email) {
    return fetch(this.base_url + "mendel/bio/v1/login/fake", {
      method: "POST",
      body: JSON.stringify({email: email}),
      headers: {"Content-Type": "application/json"}
    })
        .then(res => res.json())
        .then(response => {
          this.auth_token = response["x-authtoken"];
          return response["x-authtoken"] != null;
        });
  }

  /**
   * Peform a get operation into MedicalInfo document DB.
   * @param search : search condition of style : "!sex = :sexValue and !country = :countryValue" where ![field]
   * represents an document object field  and :[fieldValue] represent and value to be passed as the query parameter
   * @param args : Arguments to be pased as part of the url query string parameters
   * @returns {Promise<any>} return and array of MedicalInfo found.
   */
  get(search, max, ...args) {

    this.checkAuthenticated();

    let varNameRegExp = new RegExp("[!][a-zA-Z]*", "g");
    let valuesRegExp = new RegExp("[:][a-zA-Z]*", "g");

    let values = [];
    let vars = "";
    let parameters = "";

    let search_url_part = `mendel/bio/v1/minfo/`;

    if (max) {
      search_url_part += `?max=${max}`;
    }

    if (search) {

      while ((vars = valuesRegExp.exec(search)) !== null) {
        values.push(vars[0]);
      }

      if (values.length != args.length) {
        throw "Invalid variables and values length in get API call";
      }

      values.forEach((e, index) => {
        parameters += `&${e}=${args[index]}`;
      });
      search_url_part = `mendel/bio/v1/minfo/?search=${search}${parameters}`;
      if (max) {
        search_url_part += `&max=${max}`;
      }
    }

    return fetch(this.base_url + search_url_part, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-authtoken": this.auth_token
      }
    })
        .then(res => res.json())
        .then(response => {
          return response;
        });
  }

  /**
   * Retrieve and document DB MedicalInfo object by id
   * @param objectId : Id to lookup
   * @returns {Promise<any>}
   */
  getByMedicalInfoId(objectId) {
    return fetch(this.base_url + `mendel/bio/v1/minfo/${objectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-authtoken": this.auth_token
      }
    })
        .then(res => res.json())
        .then(response => {
          return response;
        });
  }

  /**
   * Update an Medical Info object
   * @param medical_info : medical info object to be updated
   * @returns {Promise<any>} Return the updated Medical Info object
   */
  updateMedicalInfo(medical_info) {

    if (!medical_info) {
      throw "Invalid parameter medical_info in updateMedicalInfo method. Parameter can't be null or empty";
    }

    if (!medical_info.objectId || !medical_info.dnaId) {
      throw "Invalid parameter medical_info in updateMedicalInfo method. " +
      "Parameters medical_info.objectId or medical_info.dnaId can't be null or empty";
    }

    return fetch(this.base_url + `mendel/bio/v1/minfo/${medical_info.objectId}`, {
      method: "PUT",
      body: JSON.stringify({medical_info: medical_info}),
      headers: {
        "Content-Type": "application/json",
        "x-authtoken": this.auth_token
      }
    })
        .then(res => res.json())
        .then(response => {
          return response;
        })
        .catch(e => {
          console.log(e)
        })
  }

  /**
   * Update an Medical Info object
   * @param dnaId : required DNA ID from the Vault.
   * @returns {Promise<any>} Returns the created Medical Info object
   */
  createMedicalInfo(dnaId) {
    return fetch(this.base_url + `mendel/bio/v1/minfo/${dnaId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-authtoken": this.auth_token
      }
    })
        .then(res => res.json())
        .then(response => {
          return response;
        });
  }

  /**
   *  Upload an file associated with an Medical Information object
   * @param mi  Medical Info object to whom file will associated
   * @param buff File buffer
   * @param fileName File Name
   */
  uploadFile(mi, buff, fileName) {
    let parameters = {Name: fileName, Body: [...buff]};
    return fetch(this.base_url + `mendel/bio/v1/minfo/${mi.objectId}/files`, {
      method: "POST",
      body: JSON.stringify(parameters),
      headers: {
        "Content-Type": "application/json",
        "x-authtoken": this.auth_token

      }
    })
        .then(res => res.json())
        .then(response => {
          return response;
        });
  }

  /**
   *  return all information about a file including the bytes.
   * @param mi  Medical Info Object to whom the file will be required.
   * @param fileName : File Name
   * @returns {Promise<any>} {Name: File Name,
   *                          Body: { AcceptRanges: 'bytes',
                                      LastModified: '2019-09-09T08:46:53.000Z',
                                      ContentLength: 9,
                                      ETag: '"81e6816987d784c0d3a44a1f7608546c"',
                                      ContentType: 'application/octet-stream',
                                      Metadata: {},
                                      Body: { type: 'Buffer', data: [Array] }}}
   */
  getFile(mi, fileName) {
    return fetch(this.base_url + `mendel/bio/v1/minfo/${mi.objectId}/file/${fileName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-authtoken": this.auth_token
      }
    })
        .then(res => res.json())
        .then(response => {
          return response;
        });
  }
}

//export default MendelBioApi;

module.exports = MendelBioApi;
