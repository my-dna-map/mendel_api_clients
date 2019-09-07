const BioClient = new require(".");
const uuidv4 = require('uuid/v4');

const client = new BioClient("http://localhost:3000/");

client.fakeLogin("mario.rodriguez@mydnamap.com").then(result => {
  client.get().then(r => {
    if (r.length == 0) { // Medical Info DB is empty, lets add some info,
      client.createMedicalInfo(uuidv4())
          .then(c => {
            c.sex = "female";
            c.country = "ARG";
            client.updateMedicalInfo(c);
          })
    } else {
      client
          .get("!sex = :sexValue and !country=:countryValue", "female", "ARG")
          .then(res => {
            res.forEach(mi => {
              client.getByMedicalInfoId(mi.objectId)
                  .then(res => console.log(res));
            })
          });
    }
  });
});


