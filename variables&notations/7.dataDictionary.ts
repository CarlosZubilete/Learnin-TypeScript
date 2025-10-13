// * Dictionary:
// they are not iterate.

// Data Interface:
interface Data {
  name: string;
  age: number;
}

// Dictionary Interface
interface IHash {
  [key: string]: Data;
}

//
const myHash: IHash = {};

myHash["one-Data"] = {
  // set
  name: "Charlie",
  age: 29,
};

myHash["two-Data"] = {
  // set
  name: "Mariano",
  age: 19,
};

myHash["three-Data"] = {
  // set
  name: "Veronica",
  age: 79,
};

// shows
console.log("My hash: " + myHash); // "My hash: [object Object]"
//
console.log("My hash key " + Object.keys(myHash)); // "My hash key one-Data,two-Data,three-Data"
//
for (let key of Object.keys(myHash)) {
  const value = myHash[key];
  console.log(`Key: ${key} -> Name: ${value.name}, Age: ${value.age}`);
}
//
for (let key in myHash) {
  const value = myHash[key];
  console.log(`Key: ${key} -> Name: ${value.name}, Age: ${value.age}`);
}

// * this we can make with map ...

const myHashWithMap = new Map();
myHashWithMap.set("one-data", { name: "Carlos", age: 29 });
myHashWithMap.set("two-data", { name: "Mariano", age: 19 });
myHashWithMap.set("three-data", { name: "Veronica", age: 79 });

for (let [key, value] of myHashWithMap) {
  console.log(
    `My Hash With Map: KEY = ${key}, NAME = ${value.name}, AGE = ${value.age}`
  );
}

// * Important
/* 
  | Feature     | Dictionary (Object)         | Map                                     |
  | ----------- | --------------------------- | --------------------------------------- |
  | Key type    | Always `string` or `symbol` | Any type (string, number, object, etc.) |
  | Order       | Not guaranteed              | Keeps insertion order                   |
  | Iterable    | ❌ No (need Object.keys)   | ✅ Yes                                  |
  | Performance | Slower with many entries    | Faster for frequent additions/removals  |
  | Syntax      | Simple `{}`                 | `.set()`, `.get()`, `.has()`            |
  | Use when    | You need a simple structure | You need iteration or non-string keys   |
*/
