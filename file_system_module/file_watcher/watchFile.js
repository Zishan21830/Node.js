import fs from "fs";

const watcher = fs.watchFile("notes.txt", (prev, curr) => {
//   console.log("Previous", prev);
//   console.log("Current", curr);
  if (prev !== curr) {
    console.log("FIle changed");
  }
});

setTimeout(()=>{
    watcher.unwatchFile()
    console.log("Fi  le watching closed")
}, 5000)
