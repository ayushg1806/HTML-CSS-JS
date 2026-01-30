// DOM - Document Object Model
// getElementById()
const heading = document.getElementById('title')
console.log(heading);

// getElementByClassName() - returns HTML collection: array-like
// map, filter, reduce: can't be applied on HTML collection
// length - can be applied
const items = document.getElementsByClassName('item');
console.log(items);
console.log(items.length);

// querySelector - selects only 1st instance
const btn = document.querySelector('button')
console.log(btn);

// querySelectorAll()
const btns = document.querySelectorAll('button')
console.log(btns);
console.log(btns[0]);
console.log(btns[1]);

const byClass = document.querySelectorAll('.item')
console.log(byClass);

const byIdVar = document.querySelectorAll('#title')
console.log(byIdVar);


const title = document.querySelector('#title');
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '20px';
title.style.fontSize = '40px';

// Changing content

// innerText
title.innerText = 'New Ttile';

// Create & Remove
const newH1 = document.createElement('h1');
newH1.innerText = 'I am new'
console.log(newH1);

// append to parent
// document.body.appendChild(newH1)

const box = document.querySelector('#box');
// box.appendChild(newH1);

// box.removeChild(newH1);
// box.remove();


// box.classList.add('card')
// box.classList.remove('card')
// console.log(box.classList.contains('card'));


// Event Listeners - let JS respond to user's actions

// click
const div = document.querySelector('div')
const newBtn = document.querySelector('#new-button');

// newBtn.addEventListener('click', () => {
//     console.log('User just clicked on the button');
//     div.classList.add('card')
// });

// Dark Mode
const toggleMode = () => {
    if(newBtn.classList.contains('btn-dark')){
        newBtn.classList.remove('btn-dark')
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        newBtn.innerText = 'Dark Mode'
    }else{
        newBtn.classList.add('btn-dark')
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        newBtn.innerText = 'Light Mode'
    }
};

newBtn.addEventListener('click', toggleMode);