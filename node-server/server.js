const http = require("http");

// Create a server with the http variable
const server = http.createServer(function (req, res) {
    // Headers
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.writeHead(200, { 'content-type': 'text/html' });
    res.writeHead(200, { 'content-type': 'application/json' });

    // Send back some information
    res.end("Welcome To Zuri Internship!");

    res.end(`
        {
            "name": "Ebuka"
            "Institution": "UNILAG"
            "Occupation": "Software Developer"
        }
    `)

    res.end(`<html>
            <body style = "background: black; text-align: center; color: white">
                <h1>
                    <p>You are beautiful</p>
                </h1>
            </body>
        </html>`)
});
// Create a port
server.listen(4000, '127.0.0.1');
console.log("Yes, you have started a server!");