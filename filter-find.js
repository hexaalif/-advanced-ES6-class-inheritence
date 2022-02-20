const numbers = [5, 13,7,41, 30, 5, 2, 19];
const BigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10)
// console.log(smallNumbers);

const products = [
    {name:'water bottle', price:50, color:'yellow'},
    {name: 'mobile phone', price: 1500, color: 'black'},
    {name: 'sticky note', price:30, color:'pink'},
    {name:'glass', price:3, color:'white'},
    {name:'jindi', price:5, color:'white'}
];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const blacks = products.filter(product => product.color == 'blue');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'white');
console.log(whiteItem);