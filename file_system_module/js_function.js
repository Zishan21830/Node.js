import fs from 'fs'

// function sizeChecker(filename){
//     const stats = fs.statSync(filename)
//     const limit = 2*1024*1024 //2 MB

//     // check the file size
//     if(stats.size > limit){
//         console.log("File should be less the 2 MB")
//     }
//     else{
//         console.log("File has been submitted successfully");
        
//     }
// }

// sizeChecker("notes.txt")

// Arrow Function
// const sizeChecker = () =>{

// }

// IIFE
// (
//     ()=>{
//         console.log("Hello")
//     }
// )()

// Higher-Order Function
// Create a list of numbers
const nums = [1, 2, 3, 4, 5]
nums.map((num, index)=>{
    console.log(`Number ${index+1}: ${num*2}`);
})
nums.filter((num, index)=>{
    if(num > 2){
        console.log(num);
    }
})