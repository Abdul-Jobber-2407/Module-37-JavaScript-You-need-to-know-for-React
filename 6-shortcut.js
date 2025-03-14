// 'abcd', 5, true, {}, []
// '' , 0, false, null,undefined
// check truthty 
let myVar = 5 ;
// check any truthy 
if(myVar){
    myVar = myVar*100;
}
else{
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything 
if(!myMoney){

}


const money = 80;
let food ;
if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit';
}

// ternary 
let food1 = money > 100 ? 'biryani': 'cha biscuit';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);


// number ot string conversion 
const num1 = 45;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// string ot number 
const input = '524';
const inputNum = +input;
console.log(inputNum);

// 
const isActive = false;
const showUser = () => console.log('disPlay User');
const hideUser = () => console.log('hide User');
isActive ? showUser(): hideUser();

// use && if the left side is true then right side will be executed 
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle
isActive = !isActive ;
