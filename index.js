// verify fetch exist. In case NO then we are running in node js so use node-fetch implementation

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
   * Perform a firebase login to comvert the FB token into an service token.
   */

  login(login_info) {
    return fetch(this.base_url + "mendel/bio/v1/login/firebase", {
      method: "POST",
      body: JSON.stringify(login_info),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(response => {
        this.auth_token = response["x-authtoken"];
        return response["x-authtoken"] != null;
      });
  }

  /**
   * Perfcorm a fake login using and mydnamap user email
   * @param email
   */

  fakeLogin(email) {
    return fetch(this.base_url + "mendel/bio/v1/login/fake", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(response => {
        this.auth_token = response["x-authtoken"];
        return response["x-authtoken"] != null;
      });
  }

  get(search, ...args) {
    let varNameRegExp = new RegExp("[!][a-zA-Z]*", "g");
    let valuesRegExp = new RegExp("[:][a-zA-Z]*", "g");
    let variables = [];
    let values = [];
    let vars = "";
    let parameters = "";

    let search_url_part = `mendel/bio/v1/minfo/`;

    if (search) {
      while ((vars = varNameRegExp.exec(search)) !== null) {
        variables.push(vars[0]);
      }

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
}

//export default MendelBioApi;

module.exports = MendelBioApi;
