// * ARRAYS
// Declare
const list: number[] = [100, 50, 35]; // more used in java.
const anotherList: Array<number> = [-100, -50, -35]; // more used in Typescript.
//
const listOnlyDefined: Array<number> = new Array(3); // only size defined.
const listThree: Array<number> = new Array(2, 5, 7); // size and values defined.
const listFour: number[] = new Array(2, 4, 6); // size and values defined.

// * Iterate an array
// for statement:
for (let i = 0; i < list.length; i++) {
  console.log("for traditional: ", list[i]); // numbers: 1OO | 50 | 35
}

// For of: it reads each element/value directly. In array used more common
for (let x of anotherList) {
  console.log("for of: ", x); // numbers:  -100 | -50 | -35
}

const fruits = ["apple", "banana", "pear"];

for (const fruit of fruits) {
  console.log(fruit); // "apple", "banana", "pear"
}

// for in: Used to get indexes (or keys) of an array or object. In object more common

// It returns the position (index) as a string:
for (let y in listThree) {
  console.log("for in: ", y); // string: "0" | "1" | "2"
}

for (const index in fruits) {
  console.log(index); // "0", "1", "2"
}

// If we want to get the values:
for (const index in fruits) {
  console.log(fruits[index]); // "apple", "banana", "pear"
}

const person = { name: "Carlos", age: 28 };

for (const key in person) {
  console.log(key, person[key]);
  // name Carlos
  // age 28
}

// size:
const sizeList: number = list.length;
console.log("sizeList: ", sizeList); // number: 3

// * Their methods to handle and more:
const names: Array<string> = ["Carlos", "Mariano", "Roberto", "Elena"];

// * push: adding in the end (pushing)
let newLength: number = names.push("Elias"); // returns a number (new length):
console.log("newLength: " + newLength); // newLength:  5

// * pop: getting and removing from the end:
const lastName: string | undefined = names.pop();
console.log("lastName: " + lastName); // lastName: Elias
newLength = names.length;
console.log("newLength: " + newLength); // newLength:  4

// combining push and pop can simulate a queue or LIFO stack (Last Input First Output)

// -----
// * shift: getting and removing from beginning:
// combining with push, can simulate a queue FIFO (First Input First Output)
const firstName: string | undefined = names.shift();
console.log("lastName: " + firstName); // lastName: Carlos
newLength = names.length; //
console.log("newLength: " + newLength); // newLength: 3

// * unshift: adding in the beginning
newLength = names.unshift("Ramon");
console.log("newLength: " + newLength); // newLength: 4

// -----
// * finding elements: indexOf(value);
const isMariano: number = names.indexOf("Mariano");
console.log("Is mariano at the list : " + isMariano); // returns 1 , (-1 it's not found)

// -----
// * list sorting: reverse() | sorted() - sorted( a , b ) |
//
const evenNumbers: number[] = [20, 2, 100, 88, 12];
const evenNumbersReserved: Array<number> = evenNumbers.reverse();
for (let x of evenNumbers) {
  console.log("Even reserve: " + x); // 12 88 100 2 20
}
//
const surnames: Array<string> = [
  "Smith",
  "Miller",
  "Carpenter",
  "Taylor",
  "Johnson",
  "Zab",
];

const surnamesSorted: Array<string> = surnames.sort();
for (let x of surnamesSorted) {
  console.log("Even reserve: " + x); // Carpenter Johnson Miller Smith Taylor Zab
}
//
/*
  A function that receives two parameters. 
  Return 0 if equals. 
  By default (ORDER ASC) a positive number if "a < b ". 
  And negative if "a > b" (ORDER DESC)    
*/
// in this example order has been changed DESC: this says: "if a is smaller, move it after b"
const evenNumbersSorted: Array<number> = evenNumbers.sort(
  (a: number, b: number) => {
    if (a < b) return 1; // put a after b -> DESC
    if (a > b) return -1; // put a before b
    return 0; // same value
  }
);

for (let x of evenNumbersSorted) {
  console.log("evenNumbersSorted: ", x);
}
//

const evenNumbersString: string = evenNumbers.join(", ");
console.log("evenNumbersString: " + evenNumbersString); // 100, 12, 2, 20, 88"
console.log("typeof: " + typeof evenNumbersString); // string

// ----
