
//  1. How to declare a variable using let and const . 
  const fatherName = 'Faruk Gachi';
 let season = 'rainy';
 season = 'winter'; 

//  ------------------------- Conditions: -----------------------
// 6 basic condition: >, < , ===, !==, <= , >=
// multiple condition: && , || 
if (fatherName === 'Faruk' || season === 'winter') {
console.log('gur daw ')
}
else if (fatherName === 'frauk') {
    console.log('patali daw')
}
else {
    console.log('kisu nai jaw vai ')
}


// ---------------------------Array-----------------------------
// Declare an array : 
let number = [1,2,3,4];
let emptyArr = [];

// Push (add element to end)
number.push(6);
console.log(number);

//3. pop (remove last element)
let lastElement = number.pop();
console.log(lastElement);

// 4. Access Elements by Index
console.log(number[0]); // first element: 1

// 5. Find Array Length
console.log(number.length)

// ----------------loop ---------------------------------------
// 1. for loop (Traditional Loop)
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// 2. while loop
let i = 0;
while(i<5){
    console.log(i);
    i++;
}

// 3. do...while loop
let j= 0;
do{
    console.log(j)
    j++;
}while(j<5)

// 4. for...of loop
let arr = [10, 20, 30];
for (let num of arr) {
    console.log(num); // 10, 20, 30
}

// 5. for...in loop
let obj = { name: "Abdul Jobber ", age: 22 };
for (let key in obj) {
    console.log(key + ": " + obj[key]); // name: Alice, age: 25
}

// 6. forEach loop (Array Method)
let nums = [1, 2, 3];
nums.forEach(num => console.log(num)); // 1, 2, 3

// -----------------------------------function------------------------------
// 1. Function Declaration (Named Function)
function greet (name){
    return `hello ,${name}!`;
}
console.log(greet("Mahomuda Anam Tonni"));

// 2. Function Expression (Anonymous Function)
const add = function(a,b){
    return a+b;
}
console.log(add(5, 3)); // Output: 8

// 3. Arrow Function (ES6)
const multiple = (a,b)=> a*b;
console.log(multiply(4, 2)); // Output: 8

// 4. Immediately Invoked Function Expression (IIFE)
(function (){
    console.log('Jobber');
}) ();

// 5. Higher-Order Function
function operate (a,b, operation){
    return operation (a,b);
}
console.log(operate(10, 5, (x, y) => x *y)); // Output: 5

// 6. Recursive Function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// 7. Generator Function
function* count() {
    yield 1;
    yield 2;
    yield 3;
}
const counter = count();
console.log(counter.next().value); // Output: 1
console.log(counter.next().value); // Output: 2
console.log(counter.next().value); // Output: 3

// 8. Callback Function
function processUserInput(callback) {
    let name = "Alice";
    callback(name);
}
processUserInput(name => console.log("Hello, " + name)); // Output: Hello, Alice

// 9. Async/Await Function (Asynchronous Function)
async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    return data;
}
fetchData().then(data => console.log(data));


//------------------- object------------------
// 3 ways to access property by name 
const student = {
    name: 'Abdul Jobber',
    age: 22,
     movies: ['king khan', 'Dhakar Mastan']
}
const myVariable = 'age';
console.log(student.age); // direct by property 
console.log(student['age']) //access via property name string
console.log(student[myVariable]); // access via property name in a variable . 
