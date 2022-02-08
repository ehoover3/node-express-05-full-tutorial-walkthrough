// Nodes uses the CommonJS Library, every file is a module by default
// Modules - Encapsulated Code (only share the minimum)

// import modules (a.k.a. files)
const names = require("./4-names.js");
const sayHi = require("./5-utils.js");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

// destructure john, peter
const { john, peter } = names;

console.log(names);
console.log(data);
sayHi("susan");
sayHi(john);
sayHi(peter);
