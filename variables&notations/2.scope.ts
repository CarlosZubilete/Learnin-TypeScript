// **Basic types**
// Let and var are reserved word. We can defined a variables with them but they have their differences.

// *block-scoping
// var
var myname = "Carlos";

if (true) {
  var myname = "123";
}

console.log("var: ", myname); // print "123".

// Let
let awesome = "123";

if (true) {
  let awesome = 123; // new scope, new variable.
}

console.log("let: ", awesome); // print "123"

// *function scope
var myname = "Carlos";

function test() {
  var myname = "Andrea"; //
}

console.log("var: ", myname); // print "Carlos"

// block-scope -> let and const use this. Reserved the names space variables every keys "{ }" , the most languages works like this.

// function-scope -> var use this. Reserved the names space variables every functions
