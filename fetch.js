// 1. JSON

const student = {
  name: "sakhib khan",
  age: 35,
  movies: ["king khan", "dahkar mastan"],
};

const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);

const studentObj = JSON.parse(studentJson);
console.log(studentObj);

// mast know fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

// find object keys, values
const keys = Object.keys(student);
const values = Object.values(student)

// using loop 
const numbers = [32, 40, 84, 85, 65, 92];
numbers.forEach(num => console.log(num))

// need to return the element
numbers.map(num => num*2)

// for of an array like object
// loop on an object using for in
const products = [
    {name: 'laptop', price: 35000, brand: 'Hp', color: 'silver'},
    {name: 'phone', price: 15000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'black'},
    {name: 'sunglass', price: 500, brand: 'r bon', color: 'silver'},
    {name: 'camera', price: 50000, brand: 'cannon', color: 'black'},
]

const newProduct = {name: 'webcam', price: 4000, brand: 'lal', color: 'white'}

// copy products array and then add newProduct
const newProducts = [...products, newProduct]
// create a new array without any specific item
// remove phone means create a new array without phone
const remaining = products.filter(product => product.name !== 'phone')