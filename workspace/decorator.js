class Car {
    description;
    getDescription() {
        return this.description;
    }
}
class ModelS extends Car {
    description = "Model S";
    cost() {
        return 73000;
    }
}
class ModelX extends Car {
    description = "Model X";
    cost() {
        return 77000;
    }
}
class CarOptions extends Car {
    decoratedCar;
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
}
class EnhancedAutoPilot extends CarOptions {
    constructor(car) {
        super(car);
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ', Enhanced Autopilot';
    }
    cost() {
        return this.decoratedCar.cost() + 5000;
    }
}
class RearFacingSeats extends CarOptions {
    constructor(car) {
        super(car);
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ', Rear facing Seats';
    }
    cost() {
        return this.decoratedCar.cost() + 4000;
    }
}
let myTesla = new ModelS();
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhancedAutoPilot(myTesla);
console.log(myTesla.cost());
console.log(myTesla.getDescription());
