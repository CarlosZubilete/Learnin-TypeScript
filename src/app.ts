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
  console.log("for traditional: ", list[i]); // 1OO - 50 - 35
}

// For of
for (let x of anotherList) {
  console.log("for of: ", x);
}

// for in
for (let y in listThree) {
  console.log("for in: ", y);
}

// size:
const sizeList: number = list.length;
console.log("sizeList: ", sizeList);
