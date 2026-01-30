const form = document.getElementById('loginForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // console.log(username, password);

    if(username && password && password.length >= 6){
        msg.innerText = `Username: ${username}, Password: ${password}`;
    }else{
        msg.innerHTML = 'Value(s) missing';
    }
});

let person1 = {name:'Ayush', age: 22};
let person2 = {...person1};
person2.age = 25;
console.log(person1, person2);
