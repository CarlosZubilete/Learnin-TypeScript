// * Hello world in generics.

function identity<Type>(arg: Type): Type {
  return arg;
}

let argA = identity<string>("myString");
let argB = identity<number>(123);
let argC = identity<boolean>(false);

console.log(argA); // "myString"
console.log(argB); // 123
console.log(argC); // false

// * Generics Type Variables.

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

const arrayNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayString: string[] = ["One", "Two", "Three", "Four", "Five"];

console.log(loggingIdentity(arrayNumber));
console.log(loggingIdentity(arrayString));
