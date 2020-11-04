// import git+ssh://git@github.com:my-dna-map/mendel_api_clients.git into the project

const BioClient = new require("../mendel_bio_api");

const client = new BioClient("http://tools.mydnamap.com/mendel/bio/v1", "http://tools.mydnamap.com/mendel/security/v1");

const config = {
  mendel: {
    security_service: "http://tools.mydnamap.com/",
    appkey: "7af1b1d6-dec8-421a-b7b0-dcfe8d3f8dcf",
    appid: "0f0c28a9-cdd3-4484-9319-db250e2e282e"
  }
};

async function test1() {
  // for TEST use 7777 as start string of any new created dnaId.
  // all dnaId creartes with 7777 will be delerted from the database.

  client.loginAppKey(config.mendel.appid, config.mendel.appkey)
      .then(async (result) => {
        if (result) {

          client.Person.update({})
              .then(p => {
                console.log(p);
              });

          /* client.MedicalInfo.create()
                .then(dna => {
                    dna.novogenId = "BORRAR";
                    console.log(dna);
                    client.MedicalInfo.update(dna).then(dna => {
                        let form = {formId:1,message:"yes"}
                        client.Forms.update(dna.dnaId,form);
                        console.log(dna);
                    })
                });*/

        }
      })
      .catch(e => {
        console.log(e)
      });
}

async function test() {

  // for TEST use 7777 as start string of any new created dnaId.
  // all dnaId creartes with 7777 will be delerted from the database.

  client.loginAppKey(config.mendel.appid, config.mendel.appkey)
      .then(async (result) => {
        let r = await client.Results.byName("99000020190311912001", "pharma_process_results");
        console.log(r);
      })
      .catch(e => {
        console.log(e)
      });
}

test1();




