interface SymbolKey {
  [key: symbol]: any;
  nationality?: string;
}

const myObj: SymbolKey = {};
let namSym: symbol = Symbol("name");
let ageSym: symbol = Symbol("age");

myObj[namSym] = "carlos";
myObj[ageSym] = 28;
myObj["nationality"] = "French";

console.log(myObj); // A symbol can be used a property key (like a PK) for a value object
console.log(Object.keys(myObj)); // Returns only keys, symbols are not show.
console.log(JSON.stringify(myObj)); // shows us , only key, symbols are not show.
console.log(Object.getOwnPropertySymbols(myObj)); //  Returns only symbol.
