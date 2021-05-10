const http = require('http');

const fs = require('fs');

const readDataStream = fs.createReadStream(__dirname + '/data.json', 'utf8');

const writeDataStream = fs.createWriteStream(__dirname + '/write.txt');

const writeNewDataStream = fs.createWriteStream(__dirname + '/write-pipe.txt');


// Read data stream
readDataStream.on('data', (chunk) => {
    console.log('New Data Chunk Received!');
    console.log(chunk);

    // Write data from stream to text file
    writeDataStream.write(chunk);
});


// pipe data stream
readDataStream.pipe(writeNewDataStream);


// Send pipe stream to client
const server = http.createServer((req, res) => {
    res.writeHead({ 'Content-Type': 'text/plain' });

    const readServerDataStream = fs.createReadStream(`${__dirname}/data.json`, 'utf8');
    readServerDataStream.pipe(res);
});


server.listen(5000, 'localhost', () => {
    console.log('Now listening at port 5000.');
});