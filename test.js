// const student = {
//     name : 'sakib khan',
//     age: 22,
//     movies:['king Khan', 'Dhaker Mostan']
// }
const products = [
    {name:'laptop', price:3200, brand: 'lenovo', color: 'silver'},
    {name:'phone', price:7000, brand: 'iphone', color: 'golden'},
    {name:'watch', price:3000, brand: 'casio', color: 'yellow'},
    {name:'sunglass', price:300, brand: 'ribon', color: 'black'},
    {name:'camera', price:20000, brand: 'canon', color: 'gray'},
]
const newProduct = {name:'webcame', price: 700,brand:'itel'};

// copy products array and then add newProduct
const newProducts = [... products,newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone 
const remaining = products.filter(p=>p.name !== 'phone');