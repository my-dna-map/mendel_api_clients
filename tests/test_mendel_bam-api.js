
const MendelClient = new require("../mendel_bam_api");
const uuidv4 = require('uuid/v4');
const fs = require('fs');

const client = new MendelClient("http://localhost:30002/mendel/bam/v1"
,"http://tools.mydnamap.com/mendel/security/v1"); //tools.mydnamap.com/mendel/bam/v1

client.loginFake("mario.rodriguez@mydnamap.com")
    .then ((user)=>{
      console.log (user);
      client.Context.all()
          .then(result => {
            console.log (result);
          })
          .catch (ex=>{console.log(ex)});
    })

