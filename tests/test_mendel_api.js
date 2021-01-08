const MendelClient = new require("../mendel_api");
const uuidv4 = require('uuid/v4');
const fs = require('fs');

const client = new MendelClient("http://localhost:3000/mendel/v1");

let rnd = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

client.loginFake("mario.rodriguez@mydnamap.com")
    .then(result => {
      console.log(result);
    })
    .catch(e => console.log(e));