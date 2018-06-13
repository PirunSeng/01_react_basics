class Car {
  constructor(){
    this.wheels = 4;
    this.type = 'Hatchback'
  }
}

class Ford extends Car {
  constructor(){
    super()
    this.windows = 5;
  }
}

// const car = new Car();
// const ford = new Ford();
//
// console.log(ford.windows);
// console.log(ford.wheels);
