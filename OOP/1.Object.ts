// (Abstraction - Encapsulation )
//  * Object Oriented Programming
// * Object is a data type, allows join methods or functions and properties or variables.

// create a class.
class Calculator {
  private memory: number; // object value -> in structure programming will be a global variable.
  constructor() {
    this.memory = 0;
  }

  // * TypeScript can't declare many constructor.
  // constructor(a: number): void {
  //   this.memory = a;
  // }

  public add(a: number, b: number): number {
    return a + b;
  }
  public sub(a: number, b: number): number {
    return a - b;
  }
  public reset() {
    this.memory = 0;
  }
  public set(a: number): void {
    this.memory = a;
  }
  public get(): number {
    return this.memory;
  }
}
// We've created an object without define the class before.
// Now we create a object instancing its class : that means we ask to the O.S some memory to create it.

const myCalculator: Calculator = new Calculator();
// * new () , instance a class

console.log(myCalculator.add(2, 3)); // 5
console.log(myCalculator.sub(2, 3)); // -1
console.log(myCalculator.get()); // 0
console.log(myCalculator.set(100)); // undefined
console.log(myCalculator.get()); // 100

// * We can implement concept "abstraction":
// 1. Focuses on hiding complex implementation details.
// 2. While exposing only the essential features of an object to the outside word
// 3. It means : the "what" an object represents and not "how" those functionalities are implemented.
