const fs = require("fs");

// 1. Create the file
fs.writeFile("notes.txt", "FS module started", (err) => {
    if(err){
        console.log(err);
        return
    }
    console.log("File written successfully");
    
});

// 2. read the file
fs.readFile("notes.txt", (err, data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data);
})

// 3. append file content
fs.appendFile("notes.txt", "This data will append in the last", (err)=>{
    if(err){
        console.log(err);
    }
    console.log("Data is appended successfully");
})

// 4. delete the file asynchronously
fs.rm("notes.txt", (err)=>{
    if(err){
        console.log(err);
    }
    console.log("file deleted successfully");
})