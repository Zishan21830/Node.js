/**
 * What is Async/Await?
 * - Async/await is a special syntax in programming languages that lets you write asynchronous code.
 * - It makes code look and act like regular synchronous (step-by-step) code.
 * 
 * The Async Keyword:-
 * - Putting async before a function means the function always returns a Promise.
 * - If the function returns a normal value, JavaScript wraps it in a resolved promise automatically.
 * 
 * The Await Keyword:-
 * - The await keyword pauses the execution of the async function until a promise finishes or settles.
 * - It can only be used inside an async function.
 * - It does not freeze the whole app or block the main thread; it only waits inside that specific function.
 */


// The Problem: Dealing with sequential asynchronous operations using .then() chains.
// This often leads to indented code structures and cumbersome error handling.

function getUser() {
    return new Promise(resolve => setTimeout(() => resolve({ id: 1, name: "John Doe" }), 1000));
}

function getProfile(userId) {
    return new Promise(resolve => setTimeout(() => resolve(
        {
            username: "John Doe",
            location: "California",
            followers: 20000,
            following: 100,
            postsCount: 58
        }
    ), 1000));
}

function getPosts(username) {
    return new Promise(resolve => setTimeout(() => resolve(["post1", "post2", "post3", "post4"]), 1000));
}

// Notice how the code chains multiple .then blocks, making it harder to read 
// and maintain as the sequence grows longer.
getUser()
    .then(user => {
        console.log("User fetched:", user.name);
        return getProfile(user.id); //this return value go to the second then()
    })
    .then(profile => {
        console.log("Profile fetched:", profile);
        return getPosts(profile.username); //this return value go to the third then()
    })
    .then(posts => {
        console.log("Posts fetched:", posts);
    })
    .catch(error => {
        console.error("Something went wrong:", error);
    });


// The Solution: async/await makes asynchronous code look and behave like 
// synchronous code, keeping it flat, clean, and readable.

async function loadDashboard() {
    try {
        // The 'await' keyword pauses the function execution until the promise resolves,
        // allowing us to store results directly in regular variables.
        const user = await getUser();
        console.log("User fetched:", user.name);

        const profile = await getProfile(user.id);
        console.log("Profile fetched:", profile);

        const posts = await getPosts(profile.username);
        console.log("Posts fetched:", posts);
    } catch (error) {
        // A single try...catch block cleanly handles errors across any of the awaited steps.
        console.error("Something went wrong:", error);
    }
}

loadDashboard();