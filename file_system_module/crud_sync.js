const fs = require("fs")

// Implement CRUD operation using Node.js `fs` module
// 1. Create a file
fs.writeFileSync("notes.txt", "Hello Node.js")

// 2. Read the content of the file
const data = fs.readFileSync("notes.txt", "utf8")
console.log("Read Data: ", data);

//3. update the content of the file
fs.appendFileSync("notes.txt", " Hello ECE-B")

// 4. Delete the file
fs.rmSync("notes.txt")