import express from 'express'

const app = express()
const data = {
    username : "Zishan",
    location: "Delhi"
}
app.get("/", (req, res)=>{
    res.send(data)
})

app.post("/", (req, res)=>{

})
app.put("/", (req, res)=>{

})
app.patch("/", (req, res)=>{

})
app.delete("/", (req, res)=>{

})

app.listen(3000, ()=>{
    console.log("Server is running...");
    
})