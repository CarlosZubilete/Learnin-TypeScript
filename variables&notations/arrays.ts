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
