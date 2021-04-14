const app = require('express')();

const mongodb = require('mongodb');

const { MongoClient } = mongodb;


// Connection string 27017
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/newzuridbclass';
const { Schema } = mongoose;


// Function to connect to the database
// async function connectToDB(str){
//     const client = new MongoClient(str, 
//         {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//         }
//     );
//     try {
//         await client.connect();
//         return client.db();
//     } catch (error) {
//         console.log(error);
//     }
// }

// connectToDB(connectionString).then(db => {
//     console.log("Connected To Database Successfully!");
//     // db
//     // .collection('friends')
//     // .insertOne(
//     //     {
//     //         name: "Jim", 
//     //         age: 22
//     //     })
//     // .then(doc => {
//     //     console.log({doc})
//     // })
//     // .catch(err => {
//     //     console.log(err)
//     // })
//     db.collection('friends').find()
//     .then(friends => {
//         console.log(friends);
//     }).catch(err => {
//         console.log(err);
//     })
//    }).catch(err => {
//             console.log(err);
//     });

mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, (err) => {
    if (err) {
        console.log({err});
    } else {
        console.log("Database Connected Successfully!");
    }
})



// Schema

const friendSchema = new Schema({
    name: String,
    age: Number,
    company: String,
    isCool: Boolean,
    cars: Array,
    status: {
        account: String,
        cashAtHand: Number,
        hasPiggyVest: Boolean
    },
    relationshipHistory: [{
        name: String,
        startDate: Date,
        endDate: Date,
        isActive: Boolean
    }]
});

const friends = mongoose.model('friends', friendSchema);


// Create a new document in 'friends' collection

// friends.create({
//     name: "Lawal",
//     age: 25,
//     company: "HNG",
//     isCool: false,
//     cars: ["Ferrari", "Bentley"],
//     status: {
//         account: "4044142027",
//         cashAtHand: 2000000,
//         hasPiggyVest: true
//     },
//     relationshipHistory: [{
//         name: "Vivian",
//         startDate: '2020-02-01',
//         endDate: '2020-05-03',
//         isActive: false
//     }]
// }, (err, friends) => {
//     if (err) {
//         console.log({err});
//     } else {
//         console.log({ newFriend: friends });
//     }
// });


// Find a document in 'friends' colllection

friends.find({name: 'KingAbesh'}, (err, friends) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(friends);
    }
});


friends.findOne({name: 'Jim'}, (err, friends) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(friends);
    }
});


friends.findById('6071a01dd6b39726003b8f4d', (err, friends) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(friends);
    }
});

friends
    .findByIdAndUpdate("6071a01dd6b39726003b8f4d",
     { name: "Agba Wire Wire 01" }, (err, friends) => {
         if (err) console.log(err);
         else {
            friends.save((err, done) => {
                if (err) console.log(err);
                else console.log('Document Updated Successfully!');
            
            });
        }
    }
);

friends.findOneAndUpdate({ name: "Jim"},
{ name: "Colonel Rapak" }, (err, friends) => {
    if (err) console.log(err);
    if (!friends) console.log("Document Not Found");
    else {
       friends.save((err, done) => {
           if (err) console.log(err);
           else console.log('Document Updated Successfully!');
       
       });
   }
}
);


// Create two routes
// GET request to fetch all friends in the database
// POST Request to add a new friend to the database
// POST request to update an existing friend
// delete an existing friend


app.get('/friends', (req, res) => {
    friends.find({}, (err, friends) => {
        if (err) {
            return res.status(500).json({ err });
        } else {
            return res.status(200).json({ friends });
        }
    })
})


app.listen(1000, () => console.log("App Is Live!"));