const SecurityClient = new require("../mendel_security");



const client = new SecurityClient("http://localhost:30010/mendel/security/v1");

//const client = new SecurityClient("http://ad893ee1785a211eaa283064d9560dea-9bfb09f721e5e4b1.elb.eu-west-2.amazonaws.com/mendel/security/v1");


async function test() {


  client.loginAppKey("0f0c28a9-cdd3-4484-9319-db250e2e282e","7af1b1d6-dec8-421a-b7b0-dcfe8d3f8dcf")
      .then(async (result) => {
        client.isValidToken(result.auth_Token)
            .then (result=>{
              console.log (result);
            })

      })
      .catch(e => {
        console.log(e)
      });
}

test();




