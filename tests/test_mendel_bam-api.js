
const MendelClient = new require("../mendel_bam_api");
const uuidv4 = require('uuid/v4');
const fs = require('fs');

const client = new MendelClient("http://ad893ee1785a211eaa283064d9560dea-9bfb09f721e5e4b1.elb.eu-west-2.amazonaws.com/mendel/bam/v1"); //ad893ee1785a211eaa283064d9560dea-9bfb09f721e5e4b1.elb.eu-west-2.amazonaws.com

client.loginFake("mario.rodriguez@mydnamap.com")
    .then ((user)=>{
      console.log (user);
      client.Context.all()
          .then(result => {
            console.log (result);
          })
          .catch (ex=>{console.log(ex)});
    })

