// Data Types - primtive/non-primitive
// Primitive Data Types

// string
let firstName = "John Doe";
console.log(firstName);
console.log(typeof firstName);

// number
let num = 25;
console.log(num);
console.log(typeof num);

// Boolean - true/false
let isMarried = false;
console.log(isMarried);
console.log(typeof isMarried);

// Undefined
let lastName;
console.log(typeof lastName);

// Null
let value = null;
console.log(value);
console.log(typeof value);

// Symbol

let randomValue = "random string";
randomValue = 45;
console.log(randomValue);

// Numbers
let number = 40;
console.log(number);

number = number + 1;
number+=1;
console.log(number);

number++;
number++;
number++;
number++;
console.log(number);

number+=5;
console.log(number);

number--;
number--;
console.log(number);

number-=5;
console.log(number);


number*=5;
console.log(number);

number/=5;
console.log(number);


// String concatenation
const sentence = "my full name is" + " John Doe"
firstName = "John";
const lastname = "Doe";
const fullName = firstName + " " + lastname;
console.log(fullName);

sentence = "my full name is " + fullName;
console.log(sentence);


// template literals  - ${}
firstName = "John"
lastname = "Doe"
sentence = "Hi, my first name is " + firstName + " and my last name is " + lastname + "."
console.log(sentence)


const sentence2 = `Hi, my first name is ${firstName} and my last name is ${lastname}.`
console.log(sentence2)

console.log(3 + 2);
console.log(3 - 2);

console.log('3' + 2); // string concatenation
console.log('3' - 2); // maths
console.log('3' * 2); // maths
console.log('3' / 2); // maths

// not - !
isMarried = false;
console.log(!isMarried);

let educated = true;
console.log(educated);
console.log(!educated);


// ==, ===
// == : compare the value
// === : compare value & type

let number1 = 6;
let number2 = '6';

console.log(number1==number2);
console.log(number1===number2);

console.log(7=='7');
console.log(7==='7');

// Operators - Arithmetic: +, , -, /, //, %, **

num = 13;
console.log(13 % 5); // Modulo

console.log(2 ** 3); // Exponent

// Comparison Operators: <, >, <=, >=, ==, ===
console.log(5>3);
console.log(5>=5);
console.log(8<=7);