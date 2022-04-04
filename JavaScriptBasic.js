// data type
// 1. primitive type
// -- String
// -- integer
// -- Boolean
// -- Null
// -- Underfine

let s1 = 'Hello String';
let num = 40;
let salary = 12.50;
let flag = true;
let price;
let model = null;
let color = undefined;

// dynamic typing
let d = 'hello string'
d = 50;


let name1 = 'Naveen';
let age = 25
console.log (name1 + ' ' + age);
console.log (3 + 3);

// const variable can not be change like final in java
const numberOfDays = 7;
console.log (numberOfDays);

// data type 2
// reference type
// -- object
// -- array
// -- functions
// 1. object
let user = {
    userName: 'Tom',
    age: 35
};

// how to access object
// --1. using dot notation
console.log(user)
console.log(user.userName);
console.log (user.age);

user.age = 38;
console.log (user.age);
// -- 2. using bracket notation
user['userName'] = 'automation name';
console.log(user.userName);

//Arrays:
// list of object
let language = ['java', 'javascript'];
console.log (language[1]);
console.log (language)
console.log (language.length)
language[2] = 'Ruby'
console.log(language)

//Functions
// No parameter
function getName (){
    console.log('This is function with no parameter')
}

getName()

// function with parameter
function getName (name, age){
    console.log ('Hello ' + name + ' with ' + age)
}

getName('Automation', 30)

// return from a function
function add (num1, num2){
    return num1 + num2
}

console.log (add (10, 20))
