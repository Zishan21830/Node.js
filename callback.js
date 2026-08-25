setTimeout(()=>{
    console.log("Database connected")
}, 2000)

Promise.resolve().then(()=>{
    console.log("{Promised Resolved");
    
})