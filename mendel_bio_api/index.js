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


        create() {
            return this.parent.post("/minfo");
        },
        /**
         *
         * @param search
         * @param max
         * @param args
         * @returns {*}
         */

        get(search) {
            let search_url_part = `/minfo/all`
            return this.parent.post(search_url_part, search);
        },

        /**
         * Retrieve and document DB MedicalInfo object by id
         * @param objectId : Id to lookup
         * @returns {Promise<any>}
         */

        getById(objectId) {
            return this.parent.get(`/minfo/${objectId}`)
        },

        /**
         * Retrieve and document DB MedicalInfo object by id
         * @param objectId : Id to lookup
         * @returns {Promise<any>}
         */

        getByDnaId(dnai) {
            return this.parent.get(`/minfo/dna/${dnai}`)
        },

        getFilesByDnaId(dnai) {
            return this.parent.get(`/minfo/files/${dnai}`)
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

            if (!medical_info.objectId) {
                throw "Invalid parameter medical_info in updateMedicalInfo method. " +
                "Parameters medical_info.objectId can't be null or empty";
            }

            if (!medical_info.dnaId) {
                throw "Invalid parameter medical_info in updateMedicalInfo method. " +
                "Parameters medical_info.dnaId can't be null or empty";
            }

            return this.parent.put(`/minfo/${medical_info.objectId}`, medical_info)
        },

        /**
         * Update an Medical Info object
         * @param dnaId : required DNA ID from the Vault.
         * @returns {Promise<any>} Returns the created Medical Info object
         */

        add(dnaId) {
            return this.parent.post(`/minfo/${dnaId}`);
        },

        /**
         *  Upload an file associated with an Medical Information object
         * @param medicalInfo  Medical Info object to whom file will associated
         * @param buffer File buffer
         * @param fileName File Name
         */

        uploadFile({medicalInfo, buffer, fileName}) {
            return this.parent.put(`/minfo/${medicalInfo.objectId}/files`, {Name: fileName, Body: [...buffer]});
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
            return this.parent.getAuthenticate(`/minfo/${medicalInfo.objectId}/files/${fileName}`)
        },
    };

    Results = {

        all(objectId, query) {
            return this.parent.post(`/minfo/${objectId}/results/all`, query)
        },

        result(idResult) {
            return this.parent.get(`/minfo/${objectId}/results/${idResult}`)
        },

        byName(objectId, name) {
            return this.parent.get(`/minfo/${objectId}/results/name/${name}`);
        },

        update(objectId, result) {
            return this.parent.put(`/minfo/${objectId}/results`, result)
        },

        deleteAll(objectId) {
            return this.parent.delete(`/minfo/${objectId}/results`)
        }

    }

    Forms = {

        all(objectId, query) {
            return this.parent.post(`/person/${objectId}/forms/all`, query)
        },

        form(idForm) {
            return this.parent.get(`/person/${objectId}/forms/${idForm}`)
        },

        byName(objectId, name) {
            return this.parent.get(`/person/${objectId}/forms/name/${name}`);
        },

        update(objectId, form) {
            return this.parent.put(`/person/${objectId}/forms`, form)
        }
    }

    Person = {

        all(objectId, query) {
            return this.parent.post(`/person/all`, query)
        },

        byId(objectId) {
            return this.parent.get(`/person/${objectId}`)
        },

        addSample (objectId,sampleId) {
            return this.parent.post(`/person/${objectId}/addsample/${sampleId}`)
        },

        allSamples (objectId) {
            return this.parent.get(`/person/${objectId}/samples`)

        },

        update( person) {
            return this.parent.put(`/person`, person)
        }
    }

    Files = {
        file(filepath) {
            let name = filepath.split('/');
            name = name[name.length-1];
            return this.parent.get(`/files/file/byname/${name}?id=${filepath}`);
        },
    }

    /**
     *
     * @param base_url
     */

    constructor(base_url, security_url) {
        super(base_url, security_url);
        this.base_url = base_url;
        this.MedicalInfo.parent = this;
        this.Results.parent = this;
        this.Forms.parent = this;
        this.Person.parent = this;
        this.Files.parent = this;
    }
}

module.exports = MendelBioApi;
