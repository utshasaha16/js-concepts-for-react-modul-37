// 1. array destructuring
const numbers = [45, 80];

const [x, y] = numbers
// console.log(x, y);

// complex destructuring
function boxify (num1, num2) {
    const nums = [num1, num2];
    return nums;
}

const [first, second] = boxify(35, 90);

// console.log(boxify(35, 90));

const student = {
    name: 'sakhib khan',
    age: 35,
    salary: 20000,
    movies: ['king khan', 'dahkar mastan']
}

const [firstMovie, secondMovie] = student.movies;

// object destructuring

const {name, age, salary} = student
// console.log(name, age);

const employee = {
    ide: 'VS Code',
    designation: 'Developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        hight: 66,
        weight: 65,
        address: 'chittagong',
        drink: 'water',
        watch: {
            color: 'black',
            price: 4500,
            brand: 'garmin'
        }
    }
}

const {designation, languages} = employee;
const {address, hight} = employee.specification;
// const {brand} = employee.specification.watch;
const {brand} = employee?.specification?.watch;