const fs = require('fs');


// Write to file
fs.writeFile('file.json', JSON.stringify(['I am a content']), (err) => {
    if (err) console.log(err);
    else console.log("File created successfully!");
});


fs.readFile('file.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    let content = JSON.parse(data);
    content.push("I am a second content.");
    fs.writeFile('file.json', JSON.stringify(content), (err) => {
        if (err) throw err;
        else console.log("File Modified Successfully!");
    });
});