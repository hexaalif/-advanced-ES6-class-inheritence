const friends = ['Tom Hanks', 'tom Cruise', 'tom Brady', 'solaiman']

const FLengths = friends.map(friend => friend.length);
// console.log(FLengths);

const products = [
    {name:'water bottle', price:50, color:'yellow'},
    {name: 'mobile phone', price: 1500, color: 'black'},
    {name: 'sticky note', price:30, color:'pink'},
    {name:'glass', price:3, color:'white'}
];

const productNames = products.map(product => product.name);
const productPrice = products.map(product => product.price)
// products.map(product => console.log(product));
products.forEach(product => console.log(product))
// console.log(productPrice)