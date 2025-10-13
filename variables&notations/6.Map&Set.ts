// * Dynamic structure
// * map -> allows keys to be associated with values in a univocal way.
/* 
  const variable = new Map([
    ["Key", "value"],
    ["Key", "value"],
    ["Key", "value"],
    ]);
*/
const map = new Map();
map.set("A", 1);
map.set("B", 2);
map.set("C", 3);

// some methods
map.get("A"); // 1
map.has("A"); // true
map.delete("A"); // true
console.log(map.size); // 2
map.clear();
console.log(map.size); // 0

// some iterator
const anotherMap = new Map([
  ["ES", 1],
  ["EN", 2],
  ["IN", 3],
]);

// keys()
for (let key of anotherMap.keys()) {
  console.log(key); // "ES" // "EN" // "IN"
}

// values()
for (let value of anotherMap.values()) {
  console.log(value); // 1 // 2 // 3
}

// entries()
for (let [key, value] of anotherMap.entries()) {
  console.log(key, value); // "ES" 1 // "EN" 2 // "IN" 3
}

//
for (let [key, value] of anotherMap) {
  console.log(key, value); // "ES" 1 // "EN" 2 // "IN" 3
}

// * set() -> allows create a data sets where they values can't repeat.

const fruitsSet = new Set(["APPLE", "ORANGE", "MANGO"]);

// some methods
fruitsSet.has("APPLE"); // true
fruitsSet.delete("APPLE"); // true
fruitsSet.size; // 2
//
fruitsSet.add("ORANGE"); // ERROR, "ORANGE" has already exists.
console.log(fruitsSet.size); // 2
fruitsSet.clear();
console.log(fruitsSet.size); // 0

// iterator ( has the same map )
const vegetableSet = new Set();
vegetableSet.add("BROCCOLI").add("CARROT").add("LETTUCE").add("POTATO");

for (let entry of vegetableSet) {
  console.log(entry); // "BROCCOLI" // "CARROT" // "LETTUCE" // "POTATO"
}

// * Garbage collection doesn't work whit map and set, so their scripts will be the whole execution although we don't use them.
// * If we want garbage collection works , we have got to use "WeakMap" and "WeakSet". They work like the origins.

const weakSet = new WeakSet();

// WeakMap lets you store a value with an object as the key.
// If you remove all references to that object, it can be cleaned up by JavaScript (garbage collection).

const weakMap = new WeakMap();

let person = { name: "Carlos" }; // create an object

weakMap.set(person, "developer"); // store some info in weakMap

// * person = null; // Now there's no more reference to the object, so it can be deleted from memory (GC).
