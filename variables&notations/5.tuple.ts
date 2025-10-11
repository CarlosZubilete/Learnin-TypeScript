// Tuple:
// * is a special type of array.
// * allows to express an array with a fixed number of elements.
// * where each element has a specific, known type at a particular index.

const exampleOne: [string, number] = ["Carlos", 28];
console.log(exampleOne[0]); // "Carlos"
console.log(exampleOne[1]); // 28
//
const exampleTwo: [string, number, boolean][] = [
  ["Carlos", 30, true],
  ["Mariano", 48, false],
  ["Lorena", 50, false],
  ["Rachael", 18, true],
];

exampleTwo.forEach((item) => {
  console.log(
    `${item[0]}'s ${item[1]} year old and is ${item[2] ? "single" : "married"}`
  );
});

// -----

interface Person {
  fullname: [string, string];
  age: number;
  isSingle: boolean;
}

const contacts: Array<Person> = [];

contacts.push({
  fullname: ["Carlos", "Jackson"],
  age: 29,
  isSingle: true,
});

contacts.push({
  fullname: ["Mariano", "White"],
  age: 16,
  isSingle: false,
});

contacts.unshift({
  fullname: ["James", "Mc Adams"],
  age: 42,
  isSingle: false,
});

console.log(contacts);
