const fs = require('fs')

// readable stream
const readStream = fs.createReadStream("intro.txt", {encoding: "utf8", highWaterMark: 10})

// readStream.on("data", (chunk)=>{
//     console.log("Data received")
//     console.log("Data: ", chunk);
    
// })
readStream.on("end", ()=>{
    console.log("File reading Completed")
})

readStream.on("error", (error)=>{
    console.log("Error: ", error.message);
    
})

// writeable stream
const writeStream = fs.createWriteStream("output.txt")
// writeStream.write("Hello")
writeStream.on("error", (error)=>{
    console.log("Error: ", error.message);
    
})
readStream.pipe(writeStream)