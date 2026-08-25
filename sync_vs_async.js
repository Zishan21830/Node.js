console.log("=== Synchronous Start");
for(let i=1; i<=10; i++){
    console.log(`${i}`)
}
console.log("=== Synchronous Start");

console.log("=== Asynchronous Start");
setTimeout(()=>{
    console.log("Hello World")
}, 2000)
console.log("=== Asynchronous End");
