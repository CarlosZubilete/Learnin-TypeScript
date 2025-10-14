// * It's not primitive variable: number , string , boolean , undefine or null.
/*
  * Declare without their constructor is more fast in execute time.
  let myArray: string[] = [];  // Better than ... = new Array();
  let obj = {} // Better than ... = new Object();
*/

// * declare with specify properties
const myObject: { name: string; age?: number } = {
  name: "Carlos",
  age: 29,
  // isMarried: true, // ERROR! that property is not declare.
};

// * Check whether a property exists
if (myObject.hasOwnProperty("isMarried")) {
  console.log("isMarried is DEFINED");
} else {
  console.log("isMarried is UNDEFINED");
}

// Iterate with "for in"
for (let key in myObject) {
  console.log(key + ": " + myObject[key]); // "name: Carlos" | "age: 29"
}

// * Object array
const myObjectArray: { name: string; age: number }[] = [
  { name: "Charlie", age: 28 },
  { name: "Mariano", age: 10 },
  { name: "Lorena", age: 20 },
];

// Iterate
myObjectArray.forEach((object, index) => {
  console.log(
    "N°" + (index + 1) + " => " + " " + object.name + " " + object.age
  );
});

// * Dynamic properties with "Dictionary"
/* 
Dictionary Interface
  interface IHash {
    [key: string]: Data;
  }
*/

const objectMe: { [i: string]: string } = {};
objectMe["Carlos"] = "Student";
objectMe["Mariano"] = "Teacher";
objectMe["Martha"] = "Developer";

console.log(objectMe);
/*
  {
    "Carlos": "Student",
    "Mariano": "Teacher",
    "Martha": "Developer"
  } 
*/
objectMe[3] = 'The number 3 is converted into a string "3"'; // "The number 3 is converted into a string \"3\""

for (let key of Object.keys(objectMe)) {
  const value = objectMe[key];
  console.log(`[${key}] = ${value}`);
}
/* 
  [LOG]: "[3] = The number 3 is converted into a string "3"" 
  [LOG]: "[Carlos] = Student" 
  [LOG]: "[Mariano] = Teacher" 
  [LOG]: "[Martha] = Developer"
*/

// * Example with Symbol ( only some methods access its)

const symbolID: symbol = Symbol("_id");

const product: { [symbolID]: string; name: string; price: number } = {
  // [symbolID]: "1", // o way to set a symbol
  name: "Smart TV",
  price: 1900,
};
// another way to set a symbol
product[symbolID] = "1";

// * returns pair key-value of properties , not symbols
console.log(Object.entries(product)); //  [["name", "Smart TV"], ["price", 1900]]

// * returns keys of properties, not symbols.
console.log(Object.keys(product)); // ["name", "price"]
// another way of get keys of properties ....
console.log(Object.getOwnPropertyNames(product)); // ["name", "price"]

// * returns values of properties, not symbols.
console.log(Object.values(product)); // ["Smart TV", 1900]

// * return symbols of properties.
console.log(Object.getOwnPropertySymbols(product)); // [Symbol(_id)]
//
console.log(Object.getOwnPropertyDescriptors(product));
/*
  [LOG]: {
    "name": {
      "value": "Smart TV",
      "writable": true,
      "enumerable": true,
      "configurable": true
    },
    "price": {
      "value": 1900,
      "writable": true,
      "enumerable": true,
      "configurable": true
    }
  }  
*/

// * Spreed operator (...)

const person: { name: string; age: number } = {
  name: "Carlos",
  age: 10,
};

const worker = {
  ...person,
  company: "Link Solution",
};

console.log(worker);
/* 
[LOG]: {
  "name": "Carlos",
  "age": 10,
  "company": "Link Solution"
} 
*/

// * Object with functions or methods
interface PersonProps {
  name: string;
  age: number;
  sayHi: () => void;
  sayBye: () => void;
}

const anotherPersona: PersonProps = {
  name: "Mariano",
  age: 10,
  sayHi() {
    console.log(`Hi, my name is ${this.name}. I'm ${this.age} year old.`);
  },
  sayBye: () => {
    console.log('From array function, "this" is not reachable'); // "From here, \"this\" is not reachable"
  },
};

console.log(anotherPersona); //  [LOG:]  {"name": "Mariano","age": 10}
anotherPersona.sayHi(); // [LOG]: "Hi, my name is Mariano. I'm 10 year old."
anotherPersona.sayBye(); //  [LOG]: "From array function, "this" is not reachable"

// another example

const lib = {
  sum: (a: number, b: number): number => a + b,
  mul: (a: number, b: number): number => a * b,
};

console.log(lib.sum(2, 5)); // 7
console.log(lib.mul(2, 5)); // 10

// * lATER: When a object needs to handle its properties, we're going to make a Encapsulation
