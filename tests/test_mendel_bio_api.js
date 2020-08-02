
// import git+ssh://git@github.com:my-dna-map/mendel_api_clients.git into the project

const BioClient = new require("../mendel_bio_api");

const client = new BioClient("http://localhost:30005/mendel/bio/v1","http://localhost:30010/mendel/security/v1");

const config = {
  mendel : {
    security_service:"localhost:30010",
    appkey:"7af1b1d6-dec8-421a-b7b0-dcfe8d3f8dcf" ,
    appid: "0f0c28a9-cdd3-4484-9319-db250e2e282e"
  }
};

async function test() {
  // for TEST use 7777 as start string of any new created dnaId.
  // all dnaId creartes with 7777 will be delerted from the database.

  client.loginAppKey(config.mendel.appid, config.mendel.appkey)
      .then(async (result) => {
        if ( result) {
          client.MedicalInfo.create()
              .then(dna => {
                dna.dnaId = "777756001909173569";
                client.MedicalInfo.update(dna).then(dna => {
                  console.log(dna);
                })
              });
        }
      })
      .catch(e => {
        console.log(e)
      });
}

test();




