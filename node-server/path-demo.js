const path = require('path');

let directory = path.join(__dirname);

console.log(directory);

let filePath = path.join(__dirname, 'node-server.js');

console.log(filePath);

let fileExt = path.extname(filePath);

console.log(fileExt);

let baseName = path.basename(filePath);

console.log(baseName);

