// declare variable based on the name of an object property
const myObject = { x:2, y:50, z:600, a:25, b:68};
const {x,b} = myObject;
console.log(x,b);

// destructuring array
const [p,q] = [45, 27,32, 38];
// console.log(p,q);

const {sky,color,soil} = {sky:'blu', soil:'mati',color:'red'}
// console.log(sky);


const company = {
    name:'gp',
    ceo: {id:1, name:'ajmol',food:'fushka'}, 
    web: {
        work:'website development', 
        employee:22, 
        framework:'react', 
        tech:{first:'html',second:'css', third:'js'}}
};

console.log(company?.web?.tech?.four?.five)