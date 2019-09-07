const BioClient = new require(".");

const client = new BioClient("http://localhost:3000/");

client.fakeLogin("mario.rodriguez@mydnamap.com").then(result => {
  //client.get().then(r => {
  client
    .get("!sex = :sexValue and !country=:countryValue", "male", "ARG")
    .then(res => {
      console.log(res);
    });
  //  });
});
