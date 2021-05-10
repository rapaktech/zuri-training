const express = require('express');

const app = express();

const connectionString = "mongodb://localhost:27017/bookshop"; // Connection string

const { MongoClient } = require('mongodb'); // Calling mongo client



const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(express.json());

app.get('/books', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({ message: err });
        const db = connectedClient.db();
        db.collection("books").find({}).toArray((err, result) => {
            if (err) {
                return res.status(500).json({ message: err });
            }
            return res.status(200).json({ books: result });
        });
    });
});


app.post('/books', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({ message: err });
        const db = connectedClient.db();
        db.collection("books").insertOne({
            author: req.body.author,
            title: req.body.title
        }, (err, result) => {
            if (err) {
                return res.status(500).json({ message: err });
            }
            return res.status(200).json({ message: "New book added to bookshop" });
        });
    });
});

app.listen(4000, () => console.log("App is running!"));