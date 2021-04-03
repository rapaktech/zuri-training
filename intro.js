let firstName = "Mary Ann";
let lastName = "Davies";

function greeting(firstName) {

    if (firstName == "Mary Ann") {
        console.log("Happy to see you!");
    } else {
        console.log(`Welcome ${firstName}`);
    }
}

greeting(firstName);

firstName = "MaryAnn";

greeting(firstName);


let first_name = "Idris";

let last_name = "Lawal";

console.log("Hello " + first_name + " " + last_name);
console.table([1, 2, 3]);


// Primitive Data Types: data types that have limited methods

let num = 12; // Number data type

let str = "Jim Ezesinachi"; // String data type

let boolean = true; //Boolean data type



// Non-primitive data type: data types with full set of methods

let foodOfTheWeek = ["Rice", "Beans", "Yam"]; // Array data type

console.table(foodOfTheWeek);

let footballers = {
    Salah: 11,
    Messi: 10
}

console.table(footballers);

console.log(footballers.Messi);

function testScope() {
    var a = 1;
    let b = 2;
}

console.log(b);