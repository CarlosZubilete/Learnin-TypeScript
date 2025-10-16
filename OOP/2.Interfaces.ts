// * Interfaces allows to set properties, its type and functions will be implement.
// * It recommends every interface to be at the own file.

// * Example one :
// Define a interface:
interface PersonConfig {
  readonly name: string; // required , not mutable after of its declaration
  age: number; // required , mutable.
  isMarried?: boolean; // not required , mutable
  [propExtra: string]: any; // data dictionary: not required because is at [] ,
}

// Declare an array using the interface:
let db_Person: PersonConfig[] = [];

// Declare a function
function addPerson(newPerson: PersonConfig): void {
  db_Person.push(newPerson);
}

//  Overload functions
function removePerson(query: string): void;
function removePerson(query: number): void;
function removePerson(query: string | number): void {
  if (typeof query == "string") {
    db_Person = db_Person.filter((v) => v.name != query);
  } else if (typeof query == "number") {
    db_Person = db_Person.filter((v) => v.age != query);
  }
}

// another function
function listPerson(): void {
  db_Person.forEach((v) =>
    console.log(
      `${v.name}, ${v.age}, ${v.isMarried ? "married" : "single"} ${
        v.hobbies ? `, and hobbies ${v.hobbies}` : ""
      }.`
    )
  );
}

// we use the functions...

let personOne: PersonConfig = { name: "Carlos", age: -30 };
// let peronError: PersonConfig = { age: 29, isMarried: false }; // * Property 'name' is missing
let personTwo: PersonConfig = { name: "Mariano", age: 10 };
let personThree: PersonConfig = {
  name: "Lorena",
  age: 19,
  isMarried: true,
  hobbies: "programming",
};

//personOne.name = "Jose Alberto"; // * cannot assign, it's read only property
personOne.age = 15; // OK.
// Adding the objects
addPerson(personOne);
addPerson(personTwo);
addPerson(personThree);
// Shows persons
listPerson();
/* 
[LOG]: "Carlos, 18, single." 
[LOG]: "Mariano, 10, single." 
[LOG]: "Lorena, 19, married, and hobbies programming." 
*/

removePerson("Carlos"); // delete carlos
removePerson(10); // delete mariano
listPerson(); //  "Lorena, 19, married, and hobbies programming."

// * Interface can define their functions or methods.

interface IAddPerson {
  (newPersona: PersonConfig): void;
}

let addPerson2: IAddPerson;
addPerson2 = function (newPerson: PersonConfig): void {
  db_Person.push(newPerson);
};

// * Interface is really usefully:
// * 1. Define a data structure to the object.
// * 2. Define properties and methods to the class.

// --------

// * Interface can be extend one or more interface, Inheriting its parameters

interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Pen extends Shape, PenStroke {
  erasable: boolean;
}

let choosePen: Pen = {} as Pen;
choosePen.color = "Red";
choosePen.penWidth = 5;
choosePen.erasable = false;
console.log(Object.getOwnPropertyNames(choosePen));
/* 
[LOG]: ["color", "penWidth", "erasable"] 
*/
