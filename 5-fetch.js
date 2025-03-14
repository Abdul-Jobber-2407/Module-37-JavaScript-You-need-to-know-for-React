// 1 .JSON
// Js > JSON.stringify = JSON , JSON > parse = JSON.parse.
const student = {
    name: 'Abdul Jobber', 
    age: 32, 
    movies: ['king khan', 'Dhakar Mastan']
 }
 const studentJSON = JSON.stringify(student);
 console.log(student);
 console.log(studentJSON);

 const studentObj = JSON.parse(studentJSON);
 console.log(studentObj)

 // fetch 
  fetch ('url')
  .then(res => res.json())
  .then(data => console.log(data));


// keys,values 
const keys = Object.keys(student);
const values = Object.values(student)
console.log(keys, values)

// for 
const numbers = [1,2,3,4,5,7,8,9];
numbers.forEach(num => console.log(num));
numbers.map(num => num*2);

// add or remove from an array : 
const products = [
    {name:'laptop', price:3200, brand: 'lenovo', color: 'silver'},
    {name:'phone', price:7000, brand: 'iphone', color: 'golden'},
    {name:'watch', price:3000, brand: 'casio', color: 'yellow'},
    {name:'sunglass', price:300, brand: 'ribon', color: 'black'},
    {name:'camera', price:20000, brand: 'canon', color: 'gray'},
]

// copy product array and then add newProduct
const newProduct =  {name:'box', price:2000, brand: 'me', color: 'white'};
const newProducts = [...products, newProduct];
console.log(newProducts);


// create a new array without one specific item 
// remove phone means create a new array without the phone
const remaining = products.filter(p=>p.name !== 'phone');
console.log(remaining);