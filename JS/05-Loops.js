// Loops - Loops help us repeat a block of code until the condition is false

// for loop
let i;
// initialization, condition, inc/dec
for (i = 0; i < 5; i++){
  console.log(i);
}
console.log('Loop is not here');


// while loop - runs until condition becomes false
i = 1;
while(i <= 5){
  console.log(i);
  i++;
}

const fruits = ['apple', 'banana', 'mango', 'guavava', 'grapes'];
for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

i = 0
while(i < fruits.length){
  console.log(fruits[i]);
  i++;
}

// do-while loop
let n=10;
do{
  console.log(n);
  n++;
}while(n <= 5)


const users = [
  {name: 'Ayush', age: 22},
  {name: 'Ravi', age: 25},
  {name: 'Meera', age: 27}
]


i = 0;
for(i; i < users.length; i++){
  console.log(`${users[i].name} is ${users[i].age} years old`);
}


const nums = [1, 2, 3, 4]
for(i=0; i<nums.length; i++){
  console.log(nums[i]*2);
}


const nums1 = [5, 12, 17, 2];
let count = 0;
for(i=0; i<nums1.length; i++){
  if(nums1[i]>10){
    count++;
  }
}
console.log(count);