'use strict';

// class Car{

// }

class Vehicle{
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive(){
    return 'Moving Forward';
  }

  stop(){
    return 'Stopping';
  }

}

module.exports = Vehicle;

// module.exports = Car;