/**
 * - Callbacks are the simply functions that are passed to the another function as an arguments.
 * - Callback as a mechanism to execute something after an asynchronous operation.
 */

const greet = (username, callback) =>{
    //This callback will call After this asynchronous operation's (setTimeout) timer elapsed.
    setTimeout(() => {
        console.log("Welcome ")
        callback(username)
    }, 3000);
}

greet("John Doe", (username)=>{
    console.log("Hello, ", username)
})

/**
 * Why callbacks
 * We use callbacks when we want one function to tell another function: “When you finish your work
 * execute this function.
 */