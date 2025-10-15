// * Arrow functions
// * look like traditional functions,
// * but they are shorter and have some differences.

(() => console.log("Hi from arrow function"))();
// ( () => Code to be executed immediately ) (). That called IIFE
/*
 * Immediately
 * Invoked
 * Function
 * Expression
 */
// Traditional IIFE version:
(function () {
  console.log("Hello from traditional function");
})();

// When that return something.
const sayHello = (): string => {
  return "Hi I'm arrow function";
};

console.log(sayHello);
console.log(sayHello());
/* 
[LOG]: () => {return "Hi I'm arrow function";} 
[LOG]: "Hi I'm arrow function"
*/

// with parameters
const greetUser = (user: string): string => `Hi ${user} from an arrow function`;
const greetUser2 = (user: string): void => {
  `Hi ${user} from an arrow function`; // No return, so undefined
};

console.log(greetUser("Carlos"));
console.log(greetUser2("Carlos"));
/* 
[LOG]: "Hi Carlos from an arrow function" 
[LOG]: undefined 
*/

// * Example with objects:
let myObj = {
  name: "Carlos",
  age: 19,
  arrowFunction: (): string => `Hi this is ${this.age}`,
  traditionalFunction: function (): string {
    return `Hi this is ${this.name} with ${this.age}`;
  },
};

console.log(myObj.traditionalFunction());
console.log(myObj.arrowFunction());
/* 
[LOG]: "Hi this is Carlos with 19" 
[ERR]: "Executed JavaScript Failed:" 
[ERR]: Cannot read properties of undefined (reading 'age') 
*/

// * Arrow functions do NOT have their own 'this' context.
// * They use 'this' from the outer scope instead.

// another example:
const myObj2 = {
  name: "Carlos",
  showThis: () => console.log(this),
};
myObj2.showThis(); // Logs the global `this`, not `myObj`
// [LOG]: undefined
