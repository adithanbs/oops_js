class car {
    constructor(name){
     this.name = name;
    }

    eats(){
        console.log(`The car Name is :${this.name} first One`)
    }
    
}

class Mycar extends car{
    eats(){
        super.eats()
        console.log(`The car Name is :${this.name} second`)
    }

}

let Newcar = new Mycar ('Maruti')
Newcar.eats()