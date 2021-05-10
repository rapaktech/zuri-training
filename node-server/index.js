const path = require('path');

const fs = require('fs');

const http = require('http');


// HTTP Status codes

// 200: Successful retrieval
// 201: Successful creation

// 300: Redirect
// 301: Redirect after creation

// 400: Bad request
// 403: Forbidden

// 500: Server Error


const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url == '/' ? 'index.html' : req.url);
    let contentType = getContentType(filePath) || 'text/html';
    let wrongPagePath = path.join(__dirname, 'public', '404.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code == 'ENOENT'){
                fs.readFile(wrongPagePath, 'utf8', (err, data) => {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(data);
                });
            } else {
                res.writeHead(500);
                res.end('A server error has occured');
            }
        } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data);
        }
    })
});

const getContentType = (filePath) => {
    let extName = path.extname(filePath);

    if (extName == '.js') return 'text/javascript';

    if (extName == '.css') return 'text/css';
}

const port = 5000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});