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

async function update() {
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


async function update() {
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

async function getAll() {

       client.loginAppKey(config.mendel.appid, config.mendel.appkey)
        .then(async (result) => {
            let all = await client.Person.all();
            console.log(all);

        })
        .catch(e => {
            console.log(e)
        });
}


async function getById(id) {

    client.loginAppKey(config.mendel.appid, config.mendel.appkey)
        .then(async (result) => {
            let all = await client.Person.byId(id);
            console.log(all);

        })
        .catch(e => {
            console.log(e)
        });
}

async function addForm() {

    client.loginAppKey(config.mendel.appid, config.mendel.appkey)
        .then(async (result) => {
            if (result) {

                client.Person.update({})
                    .then(p => {
                        console.log(p);
                         client.Forms.update(p.id,{value:"The value"})
                            .then (f=> {
                                console.log (f)
                            })
                    });
            }
        })
        .catch(e => {
            console.log(e)
        });
}

async function getAllForms(id) {

    client.loginAppKey(config.mendel.appid, config.mendel.appkey)
        .then(async (result) => {
            if (result) {

                client.Forms.all(id,{})
                    .then(f => {
                        console.log(f);
                    });
            }
        })
        .catch(e => {
            console.log(e)
        });
}

async function addSample(objectId,sampleId) {

    client.loginAppKey(config.mendel.appid, config.mendel.appkey)
        .then(async (result) => {
            if (result) {
                client.Person.addSample(objectId,sampleId)
                    .then(f => {
                        console.log(f);
                    });
            }
        })
        .catch(e => {
            console.log(e)
        });
}

//update();
//getAll();
//getById("f6abcf00-201c-11eb-8dbe-bda7bee04c4e");
//addForm();
//getAllForms("89968c00-22b2-11eb-87fc-a378e458d4ce")

addSample("732ad130-22ab-11eb-b672-8148bb416c3b","99000020190311912001");



