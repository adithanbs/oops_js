class Car {
    constructor(name,color){
      this.name = name;
      this.color = color
    }
    getData(){
        return(`${this.name}`)
    }
}

class Swift extends Car {
    constructor(name,color,speed,rpm,torque){
        super(name,color);
        this.speed = speed;
        this.rpm = rpm;
        this.torque = torque;

    }
    getNextData(){
        return(`${this.name},${this.color},${this.speed},${this.rpm},${this.torque}`)
    }
}

let myCar = new Swift("maruthi","black","200km/hr",2500,4.5);
console.log(myCar.getNextData());