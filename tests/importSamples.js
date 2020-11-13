const BioClient = new require("../mendel_bio_api");

const client = new BioClient("http://tools.mydnamap.com/mendel/bio/v1", "http://tools.mydnamap.com/mendel/security/v1");

const config = {
    mendel: {
        security_service: "http://tools.mydnamap.com/",
        appkey: "7af1b1d6-dec8-421a-b7b0-dcfe8d3f8dcf",
        appid: "0f0c28a9-cdd3-4484-9319-db250e2e282e"
    }
}

async function do_work() {

    client.loginAppKey(config.mendel.appid, config.mendel.appkey)
        .then(async (result) => {
            if (result) {
                const CSVReader = require('csvtojson');
                let samples = await CSVReader({
                    delimiter: '\t',
                    noheader: false,
                }).fromFile("./samples.tvs");

                samples.forEach(s => {
                    client.MedicalInfo.create()
                        .then(dna => {
                            dna.novogenId = "BORRAR";
                            dna.sampleName = s.sampleName;
                            dna.originalCode = s.originalCode;
                            dna.personalInfo = {sex:s.Gender,birthdate:"unknown"}
                            dna.familly = {famillyId:s.Familly,relation:s.Relation}
                            console.log(dna);
                            /*client.MedicalInfo
                                .update(dna).then(dna => {
                                console.log(dna);
                            })*/
                        });
                })
            }
        });

}

do_work();
