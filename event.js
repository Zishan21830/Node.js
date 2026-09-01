// function signup(){
//     console.log("Welcome")
//     sendConfimationEmail()
//     sendNotification()
// }

// function sendConfimationEmail(){
//     console.log("Email send");
// }
// function sendNotification(){
//     console.log("Send notification")
// }
// signup()

import EventEmitter from "node:events";


// create EventEmiiter class instance
const emitter = new EventEmitter()


// event registration

emitter.on("orderPlaced", ()=>{
    console.log("Order placed ")
})
emitter.on("orderPlaced", ()=>{
    console.log("Confirmation detaile send")
})
emitter.on("orderPlaced", ()=>{
    console.log("inventory updated")
})
emitter.once("orderPlaced", ()=>{
    console.log("inventory updated(once)")
})
emitter.on("orderPlaced", ()=>{
    console.log(" inventory updated")
})
emitter.emit("orderPlaced")
