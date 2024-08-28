// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

console.log("-----Coding Challenge #1");
// 1. Constructor function for 'Car'
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

// 2. Implement the 'accelerate' method
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 3. Implement the 'brake' method
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 4. Create 2 'Car' objects and experiment with the methods

// Data car 1: 'BMW' going at 120 km/h
const car1 = new Car('BMW', 120);

// Data car 2: 'Mercedes' going at 95 km/h
const car2 = new Car('Mercedes', 95);

// Experimenting with 'accelerate' and 'brake' methods
car1.accelerate(); 
car1.accelerate(); 
car1.brake();      
car1.brake();      

car2.accelerate(); 
car2.accelerate(); 
car2.brake();     
car2.brake();      

// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

console.log("-----Coding Challenge #2");
// 1. Re-create Challenge #1 using an ES6 class
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed; // speed is in km/h
    }
    // 2. Add a getter for speedUS (in mi/h)
    get speedUS() {
        return this.speed / 1.6; 
    }
    // 3. Add a setter for speedUS (convert mi/h to km/h)
    set speedUS(speed) {
        this.speed = speed * 1.6; 
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}

// 4. Create a new car and experiment with methods and the getter/setter

// Data car 3: 'Ford' going at 120 km/h
const car3 = new CarCl('Ford', 120);

// Experimenting with accelerate and brake methods
car1.accelerate(); 
car1.brake();      

// Using the getter to get speed in mi/h
console.log(`Speed in mi/h: ${car1.speedUS}`);

// Using the setter to set speed in mi/h
car1.speedUS = 50;
console.log(`Speed in km/h after setting in mi/h: ${car1.speed}`); 

// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

console.log("-----Coding Challenge #3");
// 1. Constructor function for 'Car'
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 1. Implement an Electric Car (EV) constructor as a child of Car
function EV(make, speed, charge) {
    Car.call(this, make, speed); 
    this.charge = charge;      
}

// Inherit the Car prototype methods
EV.prototype = Object.create(Car.prototype);

// 2. Implement 'chargeBattery' method
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.charge}%`);
};

// 3. Override the 'accelerate' method
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

// 4. Create an electric car object and experiment with the methods

// Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
const tesla = new EV('Tesla', 120, 23);

// Test the methods
tesla.accelerate(); 
tesla.brake();   
tesla.chargeBattery(90);
tesla.accelerate(); 

// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

console.log("-----Coding Challenge #4");
// 1. Create the 'CarCl1' base class
class CarCl1 {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this; 
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this; 
    }
}

// 2. Create the 'EVCl' child class of 'CarCl'
class EVCl extends CarCl1 {
    #charge; 

    constructor(make, speed, charge) {
        super(make, speed); 
        this.#charge = charge;
    }

    // Method to charge the battery and support chaining
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`${this.make} battery charged to ${this.#charge}%`);
        return this; // Enable chaining
    }

    // Override accelerate method to update charge and support chaining
    accelerate() {
        super.accelerate();
        this.#charge--; 
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this; 
    }
}

// 3. Create an electric car object and experiment with chaining
const rivian = new EVCl('Rivian', 120, 23);

// Experiment with chaining
rivian
    .accelerate()          
    .accelerate()         
    .brake()        
    .chargeBattery(90)
    .accelerate();      
