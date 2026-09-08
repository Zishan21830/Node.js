const fs = require("fs");
const path = require("path");

const publicFolder = path.join(__dirname, "public");

console.log("Watcher started...");
console.log("Watching:", publicFolder);
_
fs.watch(publicFolder, (eventType, filename) => {

    if (!filename) {
        return;
    }

    console.log(
        `File ${filename} triggered ${eventType}`
    );
    fs.writeFile("logs.txt", `File ${filename} triggered ${eventType}: ${new Date().toLocaleDateString()}`, (err)=>{
        if(err){
            consolelog("Error: ", err.message)
            return
        }
    })

    // Send message to parent process
    if (process.send) {

        process.send({
            eventType,
            filename
        });

    }

});