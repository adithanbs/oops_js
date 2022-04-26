// -> The encapsulaction is security and controlled access
// -> Hide implementation and expose Behaviour
// -> modify the implemetaction any time



class Employee {
    constructor(firstName,LastName){
        this.firstName = firstName;
        this.LastName = LastName;

    }

    addAddressDetails(address){
        return this.address = address;
    }

    getDetails(){
     return(`The employee Name : ${this.firstName}, employee Address :${this.address}`)
    }
}

let person_1 = new Employee("Adithan",3)
// person_1.firstName = "adithan"
// person_1.LastName = 2
person_1.addAddressDetails("sirkali")
console.log(person_1.getDetails());