import fs from "fs/promises"

async function readFileContent(filename){
    const data = await fs.readFile(filename, "utf8")
    console.log(data);
}
async function writeFileMethod(filename, content){
    try {
        await fs.writeFile(filename, content)
    } catch (error) {
        console.log("Error", error);
    }
}
writeFileMethod("note.txt", "Hello World")
