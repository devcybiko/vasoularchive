const IncomingForm = require('formidable').IncomingForm
const fs = require("fs");

module.exports = function upload(req, res) {
    var form = new IncomingForm();
    form.on('file', (field, file) => {
        console.log(`...load()`);
        console.log(file);
        fs.copyFile(file.path, "./recordimages/" + file.name, err => {
            console.log(err);
        });
    });
    form.on('end', (file) => {
        console.log("DONE!");
        console.log(file);
        res.json()
    });
    form.parse(req);
}
