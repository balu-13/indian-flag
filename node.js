const fs = require('fs');
fs.writeFile("src.txt", "MONGO EXPRESS ANGULARNODE", err => {
    if (err) throw err;
    console.log("successfully completed");
});