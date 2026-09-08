const fs = require('fs')

const watcher = fs.watch("notes.txt", (eventType, filename)=>{
    console.log("Event: ", eventType)
    console.log("Filename", filename)
})

setTimeout(()=>{
    watcher.close()
    console.log("Fi  le watching closed")
}, 5000)