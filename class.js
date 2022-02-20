class support {
    name;
    role = 'support web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        // console.log(this.name, 'start a support session')
    }
}

const aamir = new support('Amir Khan', 'USA');
const salman = new support('Salman Khan', 'pak');
aamir.startSession();
salman.startSession()
// console.log(aamir, salman);

function min(nums) { 
    return Math.min(nums) 
}
// console.log(min( [1,3,2 ]))
const cube=x=> x*x*x; 
// console.log(cube(2))
const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);
const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(x,y,z)


const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);

// console.log(output);

const person=[ {singer:'Atif aslam', address:'23 something street'}]
// console.log(person[0].address)

const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38};

// console.log(player.firstName);

const players = [
    { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
    { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
    { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
    { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
   ];
const check = players.map((player) => player.name.firstName);
console.log(check)