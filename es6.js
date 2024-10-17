// es6 use

const numbers = [65, 70, 83, 14];
const student = {
    name: 'sakhib khan',
    age: 35,
    movies: ['king khan', 'dahkar mastan']
}

// 1. template string
const about = `My Name : ${student.name} age of ${student.age} has number ${student[3]} also liked movies ${student.movies[0]}`;

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumber = [...numbers];

numbers.push(99);
numbers.push(99);
numbers.push(99);

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

console.log(numbers);
console.log(newNumber);
console.log(currentNumbers);