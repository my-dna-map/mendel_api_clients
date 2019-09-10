// verify fetch exist. In case NO then we are running in node js so use node-fetch implementation

"use strict";

const MendelBase = require('../MendelBase');

/**
 * Mendel BIP API client interface
 */
class MendelBioApi extends MendelBase {
  /**
   * Base Url for all Mendel BIO API calls.
   * @type {string`}
   */
  base_url = null;


  constructor(base_url) {
    super(base_url);
    this.base_url = base_url;
  }


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
