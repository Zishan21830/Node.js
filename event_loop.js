//Event Loop:-
// Definition:- 
// - To manage the asynchrounous operatins in a single threaded environment.
// - The JS(JavaScript) event loop is a constant background process that enables asynchronous non-blocking programming 
//   despite JS being a single threaded language.
// - It works by continously monitoring the execution stack tasks onto is for execution.

// Event Loop 6 Strict Synchronous Phases (Each one have its own queue to store the callbacks)
// 1. Timers Phase (For setTimeout, setInterval)
// 2. Pending Phase (Execute deffered system-level I/O callbacks like certain TCP error codes)
// 3. Idle, Prepare Phase (Used internally by node.js)
// 4. Poll phase (Process file system operations, network requests, and database responses)
// 5. Check Phase (setImmediate)
// 6. Close Phase (Handle abrupt resource cleanup. such as a socket or file descriptior emitting a 'close' event) 

// We have to 2 more different queue
// 1. process.nextTick: It is the highest priority queue
// 2. Microtask Queue: A high priority queue that holds the callback specifically from Promises(.then, .catch, .finally), async/await

// Between every single callback execution inside these phases of event loop, Node.js will pause to drain the nextTick queue and
// microtask queue if any new tasks added

import fs from 'fs'
import process from 'process';

setTimeout(()=>{
    console.log("SetTime Out"); 
})

fs.readFile("intro.txt", "utf8", (err, data)=>{
    setTimeout(()=>{
        console.log("setTimeout inside fs");
    }, 0)
    // Inside the fs.readFile setImmediate execute first because it comes the first teh 6 strict synchronous phases of event loop
    setImmediate(()=>{
        console.log("setImmediate inside fs")
    })
    console.log("File data read completed");
})

process.nextTick(()=>{
    console.log("nextTick");
    
})

setInterval(()=>{
    console.log("set interval");
    
}, 5000)

setImmediate(()=>{
    console.log("set immediate");
    
})