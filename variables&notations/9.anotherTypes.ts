// * any
// It's not recommend use it.
let notSure: any = 10;
notSure = "Maybe is a string instead";
notSure = true; // okay, definitely a boolean
// It also allows to have an untyped array.
let untypedList: any[] = ["Hola", true, 123];

// * void: Defines an absence of type. It's useful with functions not returns anything
function logWarming(): void {
  console.log("This is a warming message");
}

// * Null and undefined: in ts , this values are types and can't take another values.
// not much else we can assign to these variable
let u: undefined = undefined;
let n: null = null;

// * ReadOnly : "as const"
function getSettings() {
  return {
    modo: "prod",
    version: "1.0.1",
    options: {
      purifying: true,
    },
  } as const;
}

const settings = getSettings();
// settings.options.purifying = false; // * ERROR ! It's a read-only property.

// * Never: some functions never return a value.
// Function returning never must have unreachable end point
function handleError(message: string): never {
  throw new Error(message);
}
// Inferred return type is never
/*
  function fail():never {
    return console.error("Something failed"); // * ERROR ! type 'void' is not assignable to type 'never'
  }
*/
// It's really close a "void".
function fail(): void {
  return console.error("Something failed");
}
