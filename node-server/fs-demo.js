const fs = require('fs');

const path = require('path');

let filePath = path.join(__dirname, 'demo.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    else console.log(data);
});

