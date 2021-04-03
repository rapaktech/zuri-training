// Understanding the difference between synchronous and asynchronous operations in JS

// Importing Axios

const axios = require("axios");

// Basic sync operation
console.log("1. Prepare Farm.");
console.log("2. Plant Corn.");
console.log("3. Water plant.");
console.log("4. Add fertilizer.");



// Callback functions
const list = ["Ofe Nsala", "Banga", "Egusi", "Efo Riro", "Gbegiri"];

list.map((soup) => {
    console.log(`Pounded yam with ${soup}.`);
});

function addPoundedYam(soup) {
    console.log(`Pounded Yam with ${soup}.`)
}

list.map((soup) => addPoundedYam(soup));



// Promises
const weather = true;

const promise = new Promise(function (resolve, reject) {
    if(weather) {
        const dateDetails = {
            place: "ICM",
            location: "Ikeja",
            table: 5
        };
        resolve(dateDetails);
    } else {
        reject(new Error("Bad weather, so no date today."));
    }
});




// Promises using external API

const fetchData = () => {
    const URL = "http://jsonplaceholder.typicode.com/posts/1";

    return axios.get(URL).then(data => {
        console.log(data.data);
    }).catch((err) => {
        console.log(err.message);
    });
};

fetchData();


// Using promises
const myDate = function () {
    return promise.then((done) => {
    console.log(`We are going on a date at ${done.place} in ${done.location}. We reserved table ${done.table}.`);
}).catch((error) => {
    console.log(error.message);
});
};

myDate();



// Async/await
const retrieveData = async() => {
    try {
        const URL = "http://jsonplaceholder.typicode.com/posts/1";
        const res = await axios.get(URL);
        const date = await myDate();
        console.log(res.data);
        console.log(date);
    } catch(err){
        console.log(err);
    }
};


retrieveData();