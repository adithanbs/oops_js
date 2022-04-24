// There are certain features or mechanisms which makes a Language Object-Oriented like: 

// Object
// Classes
// Encapsulation
// Inheritance

//Defining object......

// let person = {
//     first_name : "sachin",
//     last_name : "tendulkar",
//     getFunction : function () {
//         return (
//            `The neme of the persion ${this.first_name}${this.last_name}`
//         )
//     },
//     number:{
//         lanline:23857,
//         phoneNumber:789344823
//     }

// }

// console.log(person.getFunction());
// console.log(person.number.lanline)


//using a constructor

// function person(first_name,last_name){
//     this.first_name = first_name;
//     this.last_name = last_name;
//  }

// let person_1 = new person("vel",34);
// let person2 = new person('Rahul','Avasthi');
// console.log(person);

// console.log(person_1);


// Object.create() example a

// const coder = {
//     isStudying : false,
//     printIntroduction : function(){
//         return (
//               console.log(`My name is ${this.name}.Am I studying?: ${this.isStudying}`)
//         );
//     }
// }

// const me = Object.create(coder)
// me.name = "adithan"
// me.isStudying = true


// me.printIntroduction();


// -----------------------use class Termplate------------------------

// class car {
//     constructor (name,model,color) {
//       this.name = name;
//       this.model = model;
//       this.color = color;
//     }
//    getDetail () {
//        return (`The car Name ${this.name}`);
//    }
// }


// let car_1 = new car ("maruthi","Dzier","white");

// let car_2 = new car ("Volvo","v3","black");

// console.log(car_2.name);



//----------------encapsulation example------------------------
// class person{
//     constructor(name,id){
//         this.name = name;
//         this.id = id;
//     }
//     add_Address(add){
//         this.add = add;
//     }
//     getDetails(){
//         console.log(`Name is ${this.name},Address is: ${this.add}`);
//     }
// }
 
// let person1 = new person('Mukul',21);
// person1.add_Address('Delhi');
// person1.getDetails();



//-----------------------Abstraction example----------------
// function person(fname,lname){
//     let firstname = fname;
//     let lastname = lname;
 
//     let getDetails_noaccess = function(){
//         return (`First name is: ${firstname} Last
//             name is: ${lastname}`);
//     }
 
//     this.getDetails_access = function(){
//         return (`First name is: ${firstname}, Last
//             name is: ${lastname}`);
//     }
// }
// let person1 = new person('Mukul','Latiyan');
// console.log(person1.firstname);


// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());



//Inheritance example
class person{
    constructor(name){
        this.name = name;
    }
    //method to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }
}
class student extends person{
    constructor(name,id){
        //super keyword to for calling above class constructor
        super(name);
        this.id = id;
    }
    toString(){
        return (`${super.toString()},Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul',22);
console.log(student1.toString());