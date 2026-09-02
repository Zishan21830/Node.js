import fs from 'fs/promises'

async function createSymlink(){
    try{
        await fs.symlink("/application/uploads/", "public/", "dir")
        console.log("Symlink created");
    }
    catch(err){
        console.log(err);
        
    }
}
createSymlink()

async function checkSymlink(){
    try {
        const stats = await fs.lstat("public/")
        console.log(stats.isSymbolicLink());
        
    } catch (error) {
        console.log(error);
    }
}
// checkSymlink()

async function readSymlink(){
    try {
        const data = await fs.readlink("/public")
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// readSymlink()

async function readSymlinkDirectory() {
    try {
        const files = await fs.readdir("/public");

        console.log(files);
    } catch (error) {
        console.log(error);
    }
}

// readSymlinkDirectory();

async function unlinkDirectory(){
    try {
        await fs.unlink("/public")
        console.log("FIle is unlink");
        
    } catch (error) {
        console.log(error);
        
    }
}
// unlinkDirectory()