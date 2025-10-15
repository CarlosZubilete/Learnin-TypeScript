// * GENERATOR FUNCTIONS:  allows create iterator on execute time. It called "lazy"
// * key Characteristics:
/* 
  * function* syntax: 
      Generator functions are declared with an asterisk after the function keyword (e.g., function* myGenerator() {}). 
      Arrow functions cannot be used for generator functions.
*/
/*
  * yield keyword: 
      This keyword is used within a generator function to pause its execution and return a value to the caller. 
      When the generator is resumed, execution continues from the point immediately after the yield statement.
*/

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  return "Finished"; // Optional: return a final value
}

const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 'Finished', done: true }
console.log(gen.next()); // { value: undefined, done: true }

// * Calm down , we are gonna go to learn more later....
