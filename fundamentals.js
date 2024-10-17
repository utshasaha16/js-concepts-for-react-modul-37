// 1. how to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. condition
// 6 basic conditions >, <, ===, !==, >=, <=
// multiple conditions &&, ||

if(fatherName === 'arnold' || season === 'rainy'){

}
else if(fatherName === 'Arnold'){

}
else{

}

// 3. array
// index,
// length, push
const numbers = [65, 70, 83, 14];
numbers[1] = 75;

// 4. for loop
for(let i = 0; i < numbers.length; i++){
const number = numbers[i];
console.log(number);   
}

// 5. function 
function multiply (num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(35, 90);
console.log(output);

// 6. object 
// 3 ways to access property by name
const student = {
    name: 'sakhib khan',
    age: 35,
    movies: ['king khan', 'dahkar mastan']
}

const myVariable = 'age';

// direct by property
console.log(student.age); 

// access via property name string
console.log(student['age']);

// access via property name in a variable
console.log(student[myVariable]);