// * TypeScript allows function overloading.
// * In plain JavaScript (EcmaScript), this is not possible because it's not a typed language.

type PersonType = {
  name: string;
  age: number;
};

const dataBase: PersonType[] = [
  { name: "Carlos", age: 24 },
  { name: "Mariano", age: 14 },
  { name: "Lorena", age: 92 },
  { name: "Jaz", age: 35 },
];

// * Overloading examples
function getPerson(query: string): PersonType[] | null;
function getPerson(query: number): PersonType[] | null;
function getPerson(query: string | number): PersonType[] | null {
  let result: PersonType[] | null = null;

  if (typeof query === "string") {
    result = dataBase.filter((v) => v.name === query);
  } else if (typeof query === "number") {
    result = dataBase.filter((v) => v.age === query);
  }

  return result;
}

console.log(getPerson("Carlos"));
console.log(getPerson(35));
/*
[LOG]: [{"name": "Carlos","age": 24}] 
[LOG]: [{"name": "Jaz","age": 35}] 
*/

// * Notes about function overloading
/*
 * 1. You declare multiple function signatures before the implementation.
 * 2. The implementation must handle all declared parameter types using unions (|).
 * 3. The function must return a type compatible with all overload signatures.
 * 4. TypeScript will choose which overload to use based on the argument type.
 */
