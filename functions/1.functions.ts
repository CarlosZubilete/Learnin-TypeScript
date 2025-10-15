// * FUNCTIONS: They are the basic structure of programming.

// Normal declaration:
function add(a: number, b: number): number {
  return a + b;
}

// Anonymous definition
const addAnonymous = function (a: number, b: number): number {
  return a + b;
};

console.log(add(2, 5)); // 7
console.log(addAnonymous(2, 5)); // 7
console.log(addAnonymous); // function (a, b) {return a + b;}

// Another anonymous definition
/*
 * myAdd
 * @param opA number A to be added
 * @param opB number B to be added
 * @return number a+b
 */

const myAdd: (opA: number, opB: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

console.log(myAdd(2, 3)); // 5
