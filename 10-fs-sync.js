const { readFileSync, writeFileSync } = require("fs");
// const fs = require("fs");
// const { readFileSync } = fs;

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// this below line creates a new file, then writes what's in the 2nd argument
// flag: 'a' appends to the file
writeFileSync("./content/result-sync.txt", `Here is the result: ${first}, ${second}`, {
  flag: "a",
});

console.log("done with this task");
console.log("starting the next task");
