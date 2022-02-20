class teamMember{
    name;
    role = 'support web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class support extends teamMember{
    startSession(){
        console.log(this.name, 'start a support session')
    }
}

class StudentCare{
    name;
    designation = 'student care web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    buildAroutine(student){
        console.log(this.name, 'build a rountine for', student)
    }
}

class NeptuneDev{
    name;
    designation = 'student care web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    releaseApp(version){
        console.log(this.name, 'release version no.', version)
    }
}


const aamir = new support('Amir Khan', 'USA');
const salman = new support('Salman Khan', 'pak');
// aamir.startSession();
// salman.startSession();

const alia = new StudentCare('alia Bhatt', "mumbai")
console.log(alia);