const BioClient = new require("../mendel_bio_api");
const uuidv4 = require('uuid/v4');
const fs = require('fs');

const client = new BioClient("http://localhost:3000/mendel/bio/v1");

let rnd = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

client.loginFake("mario.rodriguez@mydnamap.com")
    .then(result => {

      let sexs = ["female", "male"];
      let countries = ["ARG", "ESP", "CUB", "USA", "CHI"];

      client.get(null, 2).then(r => {
        if (r.length == 0) { // Medical Info DB is empty, lets add some info,
          for (let i = 0; i < 10; i++) {
            client.createMedicalInfo(uuidv4()) // create a dnaId to test
                .then(c => {
                  c.sex = sexs[rnd(0, 1)]; //"female";
                  c.country = countries[rnd(0, 4)];
                  client.updateMedicalInfo(c)
                      .catch(e => console.log(e));
                })
                .catch(e => console.log(e));
          }
        } else {
          client
              .get("!country=:countryValue", 4, "CUB")
              .then(res => {
                res.forEach(mi => {
                  client.getByMedicalInfoId(mi.objectId)
                      .then(mi => {
                        let files = ["test1.bam", "test2.bai"];
                        files.forEach(f => {
                          client.uploadFile(mi, fs.readFileSync(`./files/${f}`), f)
                              .then(mi => {
                                client.getFile(mi, f)
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
    })
    .catch(e => {
      console.log(e)
    });


