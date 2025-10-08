// Declare a new Symbol (optional descriptor for debugging)
let mySymbol: symbol = Symbol();
if (typeof mySymbol === "symbol") {
  console.log("it's a symbol");
}

// Example one:
const myObj: { [key: symbol]: any; [key: string]: any } = {}; // instead : const myObj = {};

const nameSymbol: symbol = Symbol("name");
const ageSymbol: symbol = Symbol("age");

myObj[nameSymbol] = "carlos";
myObj[ageSymbol] = 28;
myObj["birthday"] = "15-05-1991";

console.log(myObj);

// Example two
const secretKey = Symbol("secret");

const user = {
  name: "Carlos",
  [secretKey]: "myHiddenPassword",
};

console.log(user.name); // "Carlos"
console.log(user[secretKey]); // "myHiddenPassword"
console.log(Object.keys(user)); // ["name"]

// Example three
interface SymbolKey {
  [key: symbol]: any;
  nationality?: string;
}

const myObj2: SymbolKey = {};
let namSym2: symbol = Symbol("name");
let ageSym2: symbol = Symbol("age");

myObj2[namSym2] = "Pepe";
myObj2[ageSym2] = 1002;
myObj2["nationality"] = "French";

// Which information can we access :
console.log(myObj2); // A symbol can be used a property key (like a unique key ) in a object
console.log(Object.keys(myObj2)); // Returns only string keys, symbols are not shown
console.log(Object.getOwnPropertySymbols(myObj2)); //  Returns only symbol.
console.log(JSON.stringify(myObj)); // shows us , only key, symbols are not show.

// Symbols are different although they have the same descriptor or not
// with out descriptor
let a = Symbol();
let b = Symbol();
console.log(a === b); // return false

// with descriptor
const a1: symbol = Symbol("Oscar");
const a2: symbol = Symbol("Oscar");

console.log(a1 == a2); // returns false
