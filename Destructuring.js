const fish = {id: 58, name: 'king Hilsha', price:9000, phone: '015416789634', address:'chandpur', dress: 'silver'};

// const phone = fish.phone;
// const price = fish.price;
// const id = fish.id;

const {phone, price, dress, id} = fish;

// console.log(phone, price);
// console.log(phone);
// console.log(phone, dress);
// console.log(phone);

const company = {
    name:'gp',
    ceo: {id:1, name:'ajmol',food:'fushka'}, 
    web: {
        work:'website development', 
        employee:22, 
        framework:'react', 
        tech:{first:'html',second:'css', third:'js'}}
};
// const work = company.web.work;
// const framework = company.web.framework;
const {work,framework} = company.web;
const {food} = company.ceo;
const {second,third} = company.web.tech;
console.log(work,framework,food)