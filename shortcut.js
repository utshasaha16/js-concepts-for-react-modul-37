// truthy and falsy value

// 'kasem', 5, true, {}, []
// '', 0, false, null, undefined

let myVar = 5;
// check any truthy values
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 50;
// check any falsy or negative values
if(!myMoney){

}

const money = 80;
let food;
if(money > 100){
    food = 'biryani'
}
else{
    food = 'cha biscuit'
}

// using ternary
let food1 = money>100 ? 'biryani' : 'cha biscuit'

// number to string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// string to number conversion
const num2 = '560';
const inputNum = +num2
console.log(inputNum);

// 
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed

// toggle boolean
isActive = !isActive;