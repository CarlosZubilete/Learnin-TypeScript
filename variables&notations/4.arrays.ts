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

// * For of: it reads each element/value directly. In array used more common
for (let x of anotherList) {
  console.log("for of: ", x); // numbers:  -100 | -50 | -35
}

const fruits = ["apple", "banana", "pear"];

for (const fruit of fruits) {
  console.log(fruit); // "apple", "banana", "pear"
}

// * for in: Used to get indexes (or keys) of an array or object.

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

// * In object more common
for (const key in person) {
  console.log(key, person[key]);
  // name Carlos
  // age 28
}

// * size:
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
// * list sorting: reverse() | sorted() - sorted( a , b ) | join(",")
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
// convert to string
const evenNumbersString: string = evenNumbers.join(", ");
console.log("evenNumbersString: " + evenNumbersString); // 100, 12, 2, 20, 88"
console.log("typeof: " + typeof evenNumbersString); // string

// -----
// * Two-dimensional arrays
const arrays: string[][] = [
  ["1", "2", "3"],
  ["Carlos", "Mariano", "Lorena"],
  ["Data Science", "Architecture Software", "Teacher"],
];
//
for (let row of arrays) {
  for (let eachValue of row) {
    console.log("eachValue: " + eachValue); // "1" "2" "3" "Carlos" ...
  }
}

// ----
// * forEach() -> allows iterate the array and execute a function as a callback each element
/* 
  array.forEach( function (element, index , array) {
    script ..... 
  })

  array.forEach((element, index , array) =>  {
    script ..... 
  })
*/
const vegetables: Array<string> = [
  "Broccoli",
  "Carrot",
  "Potato",
  "Onion",
  "Lettuce",
  "Garlic",
];

vegetables.forEach((element) => {
  console.log("Each vegetable: " + element);
});

// * split() -> we can transform to string to array

const vegetablesString: string = "Broccoli,Carrot,Potato,Onion,Lettuce,Garlic";

const vegetableArray: string[] = vegetablesString.split(",");

vegetableArray.forEach((element, index) => {
  console.log("This " + element + " is on index " + index);
});

// * every() -> allows us ot iterate an array and tests whether all elements satisfy a condition provided.
// * It returns a boolean value
/*  
  function isName(value:type):boolean {}
*/
const anotherListNumber: number[] = [-1, 2, 100, -20, 20, -100, 56];

const isArrayPositive: boolean = anotherListNumber.every(
  (element) => element >= 0
);
console.log("Is Array Positive: " + isArrayPositive); // false

// * filter() -> It seems like to "every()" but returns an new array with elements that meet the condition
const onlyPositiveArray: number[] = anotherListNumber.filter(
  (element) => element > 0
);

for (const x of onlyPositiveArray) {
  console.log("Only Positive Array: " + x);
}

// * map() -> it can create a new array like a "filter()" but its difference is to execute a function for each element of the array.

const onlyNegativeNumber: number[] = onlyPositiveArray.map((item) => item * -1);
for (const x of onlyNegativeNumber) {
  console.log("Only Positive Array: " + x);
}

const onlyNegative: number[] = anotherListNumber.map((item) => {
  if (item < 0) return item; // early return
  return item * -1;
});

for (const x of onlyNegative) {
  console.log("Only Positive Array: " + x);
}
