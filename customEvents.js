import { EventEmitter } from "node:events";

class FileUploader extends EventEmitter{
    upload(filename){
        console.log("File uploading start");
        this.emit("fileUpload", filename)
        
    }
}
const uploader = new FileUploader()
uploader.on("fileUpload", ()=>{
    console.log("File uploaded", "intro.txt");
    
})
uploader.upload()
