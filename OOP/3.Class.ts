// * it recommends that each class has its own file. "ExampleClass.ts"

class Person {
  private name: string;
  constructor(name?: string) {
    if (typeof name == "undefined") this.name = "unname";
    else this.name = name;
  }
  /*  another way to declare our constructor...
   * constructor(name: string = "unname") { this.name = name; }
   */

  set(name: string): void {
    this.name = name;
  }
  get(): string {
    return this.name;
  }
  // it looks like toString() method in java.
  public introduceYourself(): string {
    return `Hi everyone, I'm ${this.name}`;
  }
}

// To create an object Persona, we're gonna need to instance a class. For that with reserved word "new".
// That means to get memory to the O.S and save the object there.

const person1: Person = new Person("Carlos");
const person2: Person = new Person();
console.log(person1.introduceYourself());
console.log(person2.introduceYourself());
person2.set("Mariano");
console.log(person2.introduceYourself());
/* 
  [LOG]: "Hi everyone, I'm Carlos" 
  [LOG]: "Hi everyone, I'm unname" 
  [LOG]: "Hi everyone, I'm Mariano" 
*/

/**
 * It looks like an interface, then: What's the difference?
 * When you define a Class, you can declare methods and properties that are access: private, protected and public
 * At interface , all their parameters will be public
 */
