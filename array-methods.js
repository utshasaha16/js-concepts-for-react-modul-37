const products = [
    {name: 'laptop', price: 35000, brand: 'Hp', color: 'silver'},
    {name: 'phone', price: 15000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'black'},
    {name: 'sunglass', price: 500, brand: 'r bon', color: 'silver'},
    {name: 'camera', price: 50000, brand: 'cannon', color: 'black'},
];

// 1. map
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

// 2. forEach
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);
const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// 4. find
const special = products.find(product => product.name.includes('n'));
console.log(special);