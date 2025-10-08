// FUNCTIONS

// Declaration with specify type:
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function with specified return type:
const divide = (a: number, b: number): number => a / b;

// Functions with optional parameters:
function greet(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hi, my name is ${name} and I'm ${age} years old.`;
  } else {
    return `Hi, my name is  ${name}.`;
  }
}

// Function with default parameters:
function greet2(name: string, age: number = 30): string {
  return `Hi, my name is ${name} I'm ${age} year old.`;
}

// handle errors:
function handleError(message: string): never {
  throw new Error(message);
}

// *Methods with map, filter and reduce:
// Declare a string array:
export const heroes: string[] = [
  "thor",
  "spider man",
  "iro man",
  "ant man",
] as const;

// Map : Make all hero names uppercase
const upperHeroes: string[] = heroes.map((element: string): string =>
  element.toUpperCase()
);

console.log(upperHeroes);

// Filter: Keep only heroes that contain the word "man"
const heroesWithMan: string[] = heroes.filter((hero: string): boolean =>
  hero.includes("man")
);

// Find
const hero: string | undefined = heroes.find(
  (hero: string): boolean => hero == "thor"
);

console.log(`Hero picked: ${hero}`);

// tsc –init
// tsc
// tsc --watch
