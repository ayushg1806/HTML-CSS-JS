// Types of Functions: Callback: which we pass to another function & Higher Order: in which another function is passed
function greet(){
    return 'Good Morning';
}; // callback function

function morning(func){
    console.log(`${func()}, to everyone`);
}; // higher order function
morning(greet);


// Array Methods: map(), filter()
// map(): transform each element in the array; size of returned array will always be equal to original array
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((item) => {
    return item * 2;
    // if(item > 2) return item * 2;
});

console.log(doubled);
console.log(numbers);

// filter() - keeps only items that match the condition
const nums = [5, 10, 15, 20];

const filtered = nums.filter((n) => {
    return n > 10;
});

console.log(filtered);