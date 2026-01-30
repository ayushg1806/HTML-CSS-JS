// Non-primitive data types: objects, arrays, functions

// Arrays
let friends = ["peter", "john", "anna", "robert", 25, true, null, undefined];
console.log(friends);

// console.log(friends[2]);
// console.log(friends[5]);
// console.log(friends);

// friends[3] = 'rohit';
// console.log(friends);
// console.log(friends.length);

// Adding new item to the array at the end
friends.push(100);
console.log(friends);

// Removing item from the end of the array
// friends.pop();
// console.log(friends);

// Adding item at the start of the array
friends.unshift("banana");
console.log(friends);


// Removing item at the start of the array
friends.shift();
console.log(friends);

console.log(friends.includes('rohit'));
console.log(friends.indexOf('anna'));



// Objects
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 45,
    isMarried : true,
    education : false,
    address : {
        city : "Mumbai",
        zip : "400001"
    }
}

console.log(person);
console.log(person.age); //dot notation
// console.log(person["age"]); //bracket notation

console.log(person.address.city);

person.age = 60;
console.log(person);



// Functions

// Declaring the function - function declaration
function greet(){
    console.log("Hello, king charles burger VII");
    console.log("Hello, prince charles burger VIII");
}

greet() //invoking the function

function hello(name){
    return "Hello friend, " + name;
}

console.log(hello("Anna"));


// Arrow function
const greet1 = () => {
    console.log("Hello!");
}
greet1();

function add(num1, num2){
    const sum = num1 + num2;
    console.log(`Sum is ${sum}`);
}
add(50, 100);


function mult(num1, num2){
    const mult = num1 * num2;
    return mult;
}

let result = mult(10, 20);
console.log(result+100);

console.log(result);

const add1 = (num1, num2) => num1 + num2;
console.log(add1(10,20));

const greet2 = name => console.log("Hello " + name);
greet2("Banana")