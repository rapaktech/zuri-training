// Actual Node Code

const axios = require("axios"); // Calling the axios NodeJS module

const URL = "http://jsonplaceholder.typicode.com/posts/1"; // Post URL from Free Fake Server



// Creating a object to hold result from server
const getPost = (cb) => {
  axios.get(URL).then(result => {
  return result.data; // HTTP status code
  }
  )
  .then(data => {
    return cb(data);
  })
  .catch(err => { 
    return cb(err.message);
  }
  )
  const id = setInterval(() => console.log("Hi!"), 2000); // Testing if the promise is working as expected

  setTimeout(() => clearInterval(id), 6000);
};




// Testing and undestanding promises and callbacks
const getMyName = (name, cb) => {
  return cb(name);
};

getMyName("KingJim", console.log);


const getVal = (arg) => {
  return console.log(arg);
};

getVal("More funds bro!");

console.log(getPost(getVal));



// Using async await to create promises
const getNewPost = async (cb) => {
  try {
    const result = await axios.get(URL);
    cb(result.data);
  } catch(err) {
    cb(err.message);
  }
};


console.log(getNewPost(getVal));



// Testing the tenablility of promises
async function getFreshPost () {
  try{
    const result = await axios.get(URL);
    console.log("Hi!");
    return result.data;
  } catch(err) {
      return err.message;
  }
}

const getAwaitedResult = async () => {
  return await getFreshPost();
}

getAwaitedResult().then(res => console.log
(res)).catch(err =>console.log(err));