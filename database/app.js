const app = require('express')();

const mongodb = require('mongodb');

const { MongoClient } = mongodb;


// Connection string 27017
const connectionString = 'mongodb://localhost:27017/newzuri';

async function connectToDB(str){
    const client = new MongoClient(str, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    try {
        await client.connect;
        return client.db();
    } catch (error) {
        console.log(error);
    }

};

connectToDB(connectionString).then(db => {
    console.log("Connected To Database Successfully!");
    db.collection('friends').insertOne(
        {
            name: "Xyluz",
            age: 120
        })
        .then(doc => {
            console.log({doc});
        }).catch(err => {
            console.log(err);
        })
}).catch(err => {
    console.log(err);
});

app.listen(1000, () => console.log("App Is Live!"));