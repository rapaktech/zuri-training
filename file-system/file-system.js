// Accessing file system using NodeJS


// Creating files using NodeJS

var fs = require("fs");

fs.writeFile('myfirstfile.txt', 'Hello World!', (err) => {
    if (err) {
        throw err;
    } else {
        console.log("File created successfully.");
    }
});



// Append or update a file

fs.appendFile('myfirstfile.txt', '\nThis is my first attempt of creating and updating a file using Node JS.\nIt is a wonderful feeling to finally be doing the things I really care about.', (err) => {
    if (err) {
        throw err;
    } else {
        console.log("File updated successfully.");
    }
});



// Read and render file

// Creating server to render the HTML file

var http = require("http");

http.createServer((req, res) => {
    fs.readFile('test.html', (err, data) => {
        if (err) {
            throw err;
        } else {
            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.write(data);
            res.end();
        }
    });
}).listen(4000);

console.log("Server session initiated");




// Delete files

fs.unlink('delete.txt', (err) => {
    if (err) throw err;
    else {
        console.log("Your file has been deleted successfully!");
    }
});



// Rename files

fs.rename('myfirstfile.txt', 'newTextFile.txt', (err) => {
    if (err) throw err;
    else {
        console.log("Your file has been renamed succesfully!");
    }
});