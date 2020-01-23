'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');

const VehicleClass = require('./vehicle-class.js');

// Implement a car and motorcycle using a Constructor
const mazda1 = new VehicleConstructor.Car('Mazda 3');
console.log(mazda1.name, mazda1.drive(), mazda1.stop());

const harley1 = new VehicleConstructor.Motorcycle('Harley');
console.log(harley1.name, harley1.wheelie(), harley1.stop());

// Implement a car and motorcycle using a Class
let bmw = new VehicleClass.Car('BMW');
console.log(bmw.name, bmw.drive(), bmw.stop());

const harley2 = new VehicleClass.Motorcycle('Harley2');
console.log(harley2.name, harley2.wheelie(), harley2.stop());
