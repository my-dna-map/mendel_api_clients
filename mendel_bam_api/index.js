// verify fetch exist. In case NO then we are running in node js so use node-fetch implementation

"use strict";

const MendelBase = require('../MendelBase');

/**
 * Mendel BIP API client interface
 */

class MendelBAMApi extends MendelBase {

  base_url = null;

  Context = {
    all() {
      return this.parent.get("/context/all");
    },

    getById(id) {
      return this.parent.get(`/context/${id}`);
    },

    stop(id, id_step) {
      return this.parent.post(`/context/${id}/stop/${id_step}`);
    },

    start(workflowId, parameters) {
      return this.parent.post(`/context/start/${workflowId}/${parameters}`);
    },

    resume(id) {
      return this.parent.post(`/context/${id}/resume`);
    },

    byIdParameter(parameter) {
      return this.parent.post(`/context/parameter/${parameter}`);
    },

  }

  Cluster = {

    nodes() {
      return this.parent.get("/cluster/nodes");
    },
    nodesCount() {
      return this.parent.get("/cluster/nodes/count");
    },
    servers() {
      return this.parent.get("/cluster/servers");
    },
    serversCount() {
      return this.parent.get("/cluster/servers/count");
    }
  }

  Worflows = {

    all() {
      return this.parent.get("/worflows/all");
    },

    getById(id) {
      return this.parent.get(`/workflows/${id}`);
    },


    start(workflowId, parameters) {
      return this.parent.post(`/workflows/${workflowId}/start`, parameters);
    },

  }

  constructor(base_url) {
    super(base_url);
    this.base_url = base_url;
    this.Context.parent = this;
    this.Cluster.parent = this;
    this.Worflows.parent = this;
  }

}

module.exports = MendelBAMApi;