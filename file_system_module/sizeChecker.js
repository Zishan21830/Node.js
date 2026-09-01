import fs from 'fs'

function sizeChecker(filename){
    const stats = fs.statSync(filename)
    const limit = 2*1024*1024 //2 MB

    // check the file size
    if(stats.size > limit){
        console.log("File should be less the 2 MB")
    }
    else{
        console.log("File has been submitted successfully");
        
    }
}

sizeChecker("notes.txt")