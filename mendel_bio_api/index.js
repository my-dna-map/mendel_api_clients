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

  MedicalInfo = {

    /**
     *
     * @param search
     * @param max
     * @param args
     * @returns {*}
     */

    get(search, max, ...args) {

      let varNameRegExp = new RegExp("[!][a-zA-Z]*", "g");
      let valuesRegExp = new RegExp("[:][a-zA-Z]*", "g");

      let values = [];
      let vars = "";
      let parameters = "";

      let search_url_part = `/minfo/`;

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
        search_url_part = `/minfo/?search=${search}${parameters}`;
        if (max) {
          search_url_part += `&max=${max}`;
        }
      }
      return this.parent.get(this.parent.base_url + search_url_part);
    },

    /**
     * Retrieve and document DB MedicalInfo object by id
     * @param objectId : Id to lookup
     * @returns {Promise<any>}
     */

    getById(objectId) {
      return this.parent.get(this.parent.base_url + `/minfo/${objectId}`)
    },

    /**
     * Update an Medical Info object
     * @param medical_info : medical info object to be updated
     * @returns {Promise<any>} Return the updated Medical Info object
     */

    update(medical_info) {

      if (!medical_info) {
        throw "Invalid parameter medical_info in updateMedicalInfo method. Parameter can't be null or empty";
      }

      if (!medical_info.objectId || !medical_info.dnaId) {
        throw "Invalid parameter medical_info in updateMedicalInfo method. " +
        "Parameters medical_info.objectId or medical_info.dnaId can't be null or empty";
      }

      return this.parent.put(this.parent.base_url + `/minfo/${medical_info.objectId}`, medical_info)
    },

    /**
     * Update an Medical Info object
     * @param dnaId : required DNA ID from the Vault.
     * @returns {Promise<any>} Returns the created Medical Info object
     */

    add(dnaId) {
      return this.parent.post(this.parent.base_url + `/minfo/${dnaId}`);

    },

    /**
     *  Upload an file associated with an Medical Information object
     * @param medicalInfo  Medical Info object to whom file will associated
     * @param buffer File buffer
     * @param fileName File Name
     */

    uploadFile({medicalInfo, buffer, fileName}) {
      return this.parent.put(this.parent.base_url + `/minfo/${medicalInfo.objectId}/files`, {Name: fileName, Body: [...buffer]});
    },

    /**
     *  return all information about a file including the bytes.
     * @param {medicalInfo  Medical Info Object to whom the file will be required.
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

    file({medicalInfo, fileName}) {
      return this.parent.getAuthenticate(this.parent.base_url + `/minfo/${medicalInfo.objectId}/files/${fileName}`)
    },

  };

  /**
   *
   * @param base_url
   */

  constructor(base_url) {
    super(base_url);
    this.base_url = base_url;
    this.MedicalInfo.parent = this;
  }
}

module.exports = MendelBioApi;
