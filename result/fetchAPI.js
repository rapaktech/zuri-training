const app = require('express')();

const fetch = require('node-fetch');

const fs = require('fs');

app.get('/', function (req, res) {
    var url = 'http://jsonplaceholder.typicode.com/posts/1';
    fetch(url)
    .then(res => res.text())
    .then(data => {
        fs.writeFile('posts.json', data, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("JSON file created successfully!");
            }
        });
        fs.writeFile('posts.txt', data, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Text file created successfully!");
            }
        });
    })
    .catch(err => {
        res.send(err);
    });
});   

app.listen(1000, () => console.log("App Is Live!"));