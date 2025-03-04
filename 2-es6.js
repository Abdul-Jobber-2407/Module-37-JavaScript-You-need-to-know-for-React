const numbers = [89,87,90,47,80];
const student = {
    name : 'sakib khan',
    age: 22,
    movies:['king Khan', 'Dhaker Mostan']
};

// 1. template string 
const about = `My Name is ${student.name} age of ${student.age} has numbers ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

//2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x%2 == 0 ;
const addThree = ( x,y,z) => x+y+z;
const doMath = (num1, num2) =>{
    const sum = num1*num2;
    return sum;
}

// spread operator
// const newNumbers = numbers ;
// numbers.push(99);
// console.log(newNumbers);
// const numbers = [89,87,90,47,80];
const newNumbers =[...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 44];
numbers.push(99);
numbers.push(105);
numbers.push(108);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);