const products = [
    {name:'laptop', price:3200, brand: 'lenovo', color: 'silver'},
    {name:'phone', price:7000, brand: 'iphone', color: 'golden'},
    {name:'watch', price:3000, brand: 'casio', color: 'yellow'},
    {name:'sunglass', price:300, brand: 'ribon', color: 'black'},
    {name:'camera', price:20000, brand: 'canon', color: 'gray'},
]

const brands = products.map(product =>product.brand);
// console.log(brands);

const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.brand));

products.forEach(product =>{

});

// 3.filter :
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);

// 4.find 
const special = products.find(p=>p.name.includes('n'));
console.log(special);