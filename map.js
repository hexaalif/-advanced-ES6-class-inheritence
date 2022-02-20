const numbers = [4,6,8,10];
const output = [];

// function doubleOld(number){
//     return number * 2;
// }

const doubleIt = number => number*2;

for(const number of numbers){
    const result = doubleIt(number);
    output.push(result);
}
// console.log(output);

// map
// const output3 = numbers.map(doubleIt);
const output1 = numbers.map(number => number*2)
// console.log(output1);

const squares = numbers.map(x => x*x)
console.log(squares)