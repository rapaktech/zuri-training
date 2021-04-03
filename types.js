// Types
const myAge = 100;

// Numbers
const addTenToMyAge = myAge + 100;
console.log(addTenToMyAge);


// Strings
const firstName = "Abasifreke";
const lastName = "Ekwere";

const fullName = firstName + " " + lastName;

console.log(fullName);


// Template Literals

console.log(`${firstName} ${lastName}`);


// Boolean

const isTrue = 1 > 2;

// Truthy and falsy values
console.log(Boolean({}));


// Array operations
const zuriInterns = ["Abbas", "Flora", "Emma"];

console.table(zuriInterns);

// Pushing values to the back of an array
zuriInterns.push("Andrew");

console.table(zuriInterns);

// Removing values from the front of the array
zuriInterns.shift();

console.table(zuriInterns);

// Removing values from the back of the array
zuriInterns.pop();

console.table(zuriInterns);

// Pushing values to the front of an array
zuriInterns.unshift("Ginny");

console.table(zuriInterns);


// Using 'includes' method to search a string of text
let nameTag = "Jim Ezesinachi";

let firstTag = "Jim";

console.log(nameTag.includes(firstTag));

console.log(nameTag.includes(" Ez"));

console.log(nameTag.includes(firstName));


// Using 'slice' method to return a part of a string of text
console.log(nameTag.slice(0, 3));


const jsSoldiers = {
    ninja1: "John",
    ninja2: "Matt",
    ninja3: "Georgia"
}


// Using object methods to return the properties of objects
console.log(Object.keys(jsSoldiers));
console.log(Object.values(jsSoldiers));
console.log(Object.entries(jsSoldiers));



const topSpenders = [
    "Davido",
    "Shatta Wale",
    "Burna Boy",
    "Wizkid"
]


// Using includes method to search properties of object
console.log(topSpenders.includes("Burna Boy"));

console.log(topSpenders.includes("Falz"));


// Using filter method to return properties of object that match certain set criteria
const updatedTopSpenders = topSpenders.filter(item => {
    return !item.startsWith("W");
});

console.log(updatedTopSpenders);



const igHandles = [
    "Davido",
    "Shatta Wale",
    "Burna Boy",
    "Wizkid"
]


// Using map to transform and return the properties of an object in a new array
const updatedHandles = igHandles.map((item, index, mainArray) => {
    return `celeb_${item}`;
});

console.log(updatedHandles);




// Testing and understanding the power of scope using functions
let number = 1;

function doIt() {
    const number = 4;
    return number;
}
console.log(doIt());

console.log(number);



// Using 'currying' to return a function in another function
function returnFunc(a) {
    return function childFunc() {
        console.log(a);
    };
}
  
  const curriedFunc = returnFunc(5);
  
  console.log(curriedFunc());

  

// Write a function that returns yes if value is divisible by 2, and no if not.
const isDivisibleBy2 = (num) => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(isDivisibleBy2(2));


const isDivisibleByNum = (num, divisibleNum) => {

    if (!num || !divisibleNum) {
        return "Please pass all arguments";
    }
    if (num % divisibleNum === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisibleByNum(8, 2));



// Testing the breakpoints of JavaScript's data types 
console.log(NaN === NaN);

console.log(Number.isNaN(4 % 0));



// Using 'this' keyword to create constructor functions
function ZuriIntern(age) {
    this.age = age;
}


// creating new objects from constructor functions 
const Tomiwa = new ZuriIntern(25);

const David = new ZuriIntern(30);


console.log(Tomiwa);
console.log(David);



// Testing and understanding function prototypes
ZuriIntern.prototype.speak = function(word){
    return word;
}

ZuriIntern.prototype.dance = function () {
    return `Dancing as a ${this.age} year old`;
}

console.log(Tomiwa.speak("Hi, I'm Tomiwa."));

console.log(David.speak("Hi Tomiwa, David here!"));



console.log(Tomiwa.dance());

console.log(David.dance());



// Adding a Special Use Case for an object built from a constructor function
Tomiwa.useChannelWord = function () {
    return `Hi! I'm your team lead.`;
}

console.log(Tomiwa.useChannelWord());



// Classes in JavaScript
class ZuriIn {
    constructor(age){
        this.age = age;
    }

    dance() {
        return `Dancing as a ${this.age} year old`;
    }

    speak(word) {
        return word;
    }
}



// Creating new objects from a class
const TomiwaNew = new ZuriIn(25);

const DavidNew = new ZuriIn(30);


console.log(DavidNew.speak("Alleluiya!"));

console.log(TomiwaNew.dance());



// Extending an old class to form a new class using 'extends'
class Flex extends ZuriIn{}

const TomiwaFlex = new Flex(45);

console.log(TomiwaFlex.speak("Oporr!"));



// Using class extension to create a new class, and adding a new prototype
class TeamLead extends ZuriIn {
    useChannelWord(){
        return `Hi! I'm your team lead.`;
    }
}


const TomiwaExtend = new TeamLead(55);

console.log(TomiwaExtend.useChannelWord());

const Precious = new TeamLead(26);

console.log(Precious.useChannelWord());