const BioClient = new require("../mendel_bio_api");
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const CSVReader = require('csvtojson');


//const client = new BioClient("http://localhost:30005/mendel/bio/v1");

const client = new BioClient("http://ad893ee1785a211eaa283064d9560dea-9bfb09f721e5e4b1.elb.eu-west-2.amazonaws.com/mendel/bio/v1");


let rnd = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

async function test() {

  var dockerNames = require('docker-names');
  client.loginFake("mario.rodriguez@mydnamap.com")
      .then(async (result) => {

        let tableFileCodeNames = await CSVReader().fromFile("./codigos.csv");
        for (let e in tableFileCodeNames) {
          let element = tableFileCodeNames[e];

          let mi = await client.MedicalInfo.get({dnaId: element.Codigo});
          if (!mi.length) {
            mi = await client.MedicalInfo.create(uuidv4());
          } else {
            mi = mi[0];
          }
          mi.friendlyName = dockerNames.getRandomName();
          mi.dnaId = element.Codigo;
          mi.novogenId = element.Cod_NovoGen;
          mi.sampleName = element.Nombre_Muestra;
          mi.originalCode = element.Codigo_Original;
          client.MedicalInfo.update(mi)
              .then(updated => {
                console.log(updated)
              })
              .catch(e => console.log(e));
        }

        /*
        client.MedicalInfo.get({})
            .then(r => {
              console.log(r);
              if (r.length == 0) { // Medical Info DB is empty, lets add some info,
                for (let i = 0; i < 1; i++) {
                  client.MedicalInfo.create(uuidv4()) // create a dnaId to test
                      .then(c => {
                        c.dnaId = "00000000000000000000";
                        client.MedicalInfo.update(c)
                            .then(mi => {
                              console.log(mi)
                            })
                            .catch(e => console.log(e));
                      })
                      .catch(e => console.log(e));
                }
              }
              else {
                client
                    .MedicalInfo.get("!country=:countryValue")
                    .then(res => {
                      res.forEach(mi => {
                        client.MedicalInfo.getById(mi.objectId)
                            .then(medicalInfo => {
                              client.MedicalInfo.update(medicalInfo);
                              let files = ["test1.bam", "test2.bai"];
                              files.forEach(fileName => {
                                client.MedicalInfo.uploadFile({medicalInfo, buffer: fs.readFileSync(`./files/${fileName}`), fileName})
                                    .then(mi => {
                                      client.MedicalInfo.file({medicalInfo: mi, fileName})
                                          .then(file => {
                                            console.log(file)
                                          });
                                    })
                                    .catch(e => console.error(e));
                              })
                            })
                            .catch(e => console.log(e))


                            })
                      })
                          .catch(e => console.log(e));
                    }
            });
  */
      })
      .catch(e => {
        console.log(e)
      });
}

test();




