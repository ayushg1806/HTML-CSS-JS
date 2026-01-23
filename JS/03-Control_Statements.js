// if statement
let age = 20;
if(age >= 18){
    console.log('You are eligible to vote');   
}

age = 17;
if(age < 18){
    console.log('You are not eligible to vote');
}

// if-else statement
age = 20;
if(age >= 18){
    console.log('You are eligible to vote');   
}else{
    console.log('You are not eligible to vote')
}

// if-else-if statement
let dice = 4;
if(dice===1){
    console.log('You got one!');
}else if(dice===2){
    console.log('You got two!');
}else if(dice===3){
    console.log('You got three!');
}else if(dice===4){
    console.log('You got four!');
}else if(dice===5){
    console.log('You got five!');
}else{
    console.log('You got six!');
}

// switch statement
dice = 3;
switch(dice){
    case 1:
        console.log('You got 1');
        break;
    case 2:
        console.log('You got 2');
        break;
    case 3:
        console.log('You got 3');
        break;
    case 4:
        console.log('You got 4');
        break;
    case 5:
        console.log('You got 5');
        break;
    case 6:
        console.log('You got 6');
        break;
    default:
        console.log('Invalid dice rolled');    
}

// Logical Operators: &&(AND), ||(OR)
let firstName = 'Ayush';
age = 22;

if (firstName == 'Ayush' && age == 22){
    console.log('Entry allowed');
}else{
    console.log('Entry denied');
}

// Ternary operator
// condition ? if condition is true : if condition is false
age = 25;
age >= 18 ? console.log('You are eligible') : console.log('You are not eligible');
