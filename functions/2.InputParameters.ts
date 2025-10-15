// *
// Functions with optional parameters:
function introduceMe(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hi, my name is ${name} and I'm ${age} years old.`;
  } else {
    return `Hi, my name is  ${name}.`;
  }
}
// Recommends that there must be only one end point
function introduceMe2(name: string, age?: number): string {
  let message: string = `Hi, my name is ${name}`;
  if (age) {
    message += `, and I'm ${age} years old`;
  }
  return message;
}

console.log(introduceMe2("Carlos")); // "Hi, my name is Carlos"
console.log(introduceMe2("Mariano", 29)); // "Hi, my name is Mariano, and I'm 29 years old"

// Function with default parameters:
function greet(name: string, age: number = 50): string {
  return `Hi, my name is ${name} I'm ${age} year old.`;
}

console.log(greet("Carlos")); // "Hi, my name is Carlos I'm 50 year old."
console.log(greet("Mariano", 29)); // "Hi, my name is Mariano I'm 29 year old."

// * Object whit parameters:

const onePerson: { name: string; age: number } = {
  name: "Ricardo",
  age: 19,
};

function prettyPrint(person = { name: "unknown", age: 0 }): string {
  return `${person.name} is ${person.age}`;
}

console.log(prettyPrint(onePerson)); // "Ricardo is 19"
console.log(prettyPrint()); // "unknown is 0"

// * spread operator (...) -> When you don't know how many parameters you have.
// * We have to group them into an array -> "var-args" -> ( ...args: any [] )

function introduceMe3(name: string, ...hobbies: string[]): string {
  return `Hi, my name is ${name} and my hobbies are ${hobbies.join(", ")}.`;
}

console.log(introduceMe3("Carlos", "Listen to music", "Cycling")); // "Hi, my name is Carlos and my hobbies are Listen to music, Cycling."
console.log(introduceMe3("Mariano", "Programming", "Running", "Drawing")); // "Hi, my name is Mariano and my hobbies are Programming, Running, Drawing."

// Remember that "spread operator (...)" allows copy properties of an object
const point2D: { x: number; y: number } = { x: 1, y: 2 };
const point3D = { ...point2D, z: 3 };
console.log(point2D); // "x": 1, "y": 2
console.log(point3D); // "x": 1, "y": 2, "z": 3
