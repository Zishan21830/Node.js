# Node.js — Learning Repository

> A practical, example-driven Node.js repository covering asynchronous JavaScript, callbacks, promises, events, the event loop, CommonJS/ES Modules, the File System module, streams, file watching, and a mini development server.

[![Node.js](https://img.shields.io/badge/Node.js-JavaScript%20Runtime-339933?logo=node.js\&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub](https://img.shields.io/badge/Repository-GitHub-181717?logo=github)](https://github.com/Zishan21830/Node.js)

---

## 📚 About This Repository

This repository is a collection of **hands-on Node.js examples and small projects** designed to understand how Node.js works internally and how its core APIs are used in real applications.

Instead of putting everything into a single application, the repository separates concepts into small, focused examples so that each file can be executed, modified, and experimented with independently.

The repository currently covers:

* JavaScript callbacks
* Callback hell
* Promises
* Promise chaining
* Resolving callback-based workflows with Promises
* Event-driven programming
* `EventEmitter`
* Custom events
* CommonJS modules
* ES Modules
* Synchronous vs asynchronous execution
* Node.js Event Loop
* `process.nextTick()`
* `setTimeout()`
* `setImmediate()`
* File System (`fs`) module
* File and directory operations
* Synchronous, callback-based and Promise-based file APIs
* File metadata and statistics
* Symbolic links
* Streams
* Readable and Writable streams
* `pipe()`
* File watching
* `fs.watch()`
* `fs.watchFile()`
* A mini HTTP development server
* Static file serving
* HTTP response streaming
* Server-Sent Events (SSE)
* Child processes using `fork()`
* Automatic browser reload when files change

The repository is especially useful for **students, beginners, and developers learning backend development with Node.js**.

---

# 🗂️ Repository Structure

```text
Node.js/
│
├── callback.js
├── callback_hell.js
├── customEvents.js
├── esm.js
├── event.js
├── event_loop.js
├── index.js
├── intro.txt
├── main.html
├── main.js
├── promise.js
├── promises.js
├── resolve_callback_hell.js
├── sync_vs_async.js
│
└── file_system_module/
    │
    ├── Streams/
    │   ├── intro.txt
    │   └── stream.js
    │
    ├── file_watcher/
    │   ├── notes.txt
    │   ├── watch.js
    │   └── watchFile.js
    │
    ├── mini-web-server/
    │   ├── public/
    │   │   ├── index.html
    │   │   └── style.css
    │   ├── logs.txt
    │   ├── server.js
    │   └── watcher.js
    │
    ├── myFolder/
    │   └── script.js
    │
    ├── content.txt
    ├── crud_async.js
    ├── crud_promises.js
    ├── crud_sync.js
    ├── fs_dir.js
    ├── js_function.js
    ├── link.txt
    ├── notes.txt
    ├── sizeChecker.js
    ├── stats.js
    ├── symbolic_link.js
    └── symlink_application.js
```

The current repository contains the root-level examples above and a substantial `file_system_module` section containing Streams, file watchers, and the mini web server.

---

# 🧭 Learning Roadmap

A recommended order for studying this repository is:

```text
JavaScript Functions
       │
       ▼
Callbacks
       │
       ▼
Asynchronous Programming
       │
       ▼
Callback Hell
       │
       ▼
Promises
       │
       ▼
Promise Chaining
       │
       ▼
Events & EventEmitter
       │
       ▼
Event Loop
       │
       ├──────────────┐
       ▼              ▼
CommonJS          ES Modules
       │              │
       └──────┬───────┘
              ▼
       File System Module
              │
       ┌──────┼──────────────┐
       ▼      ▼              ▼
     CRUD   Metadata       Directories
       │
       ▼
     Streams
       │
       ▼
   File Watching
       │
       ▼
 Mini Web Server
       │
       ▼
 Live Reload / SSE
```

---

# 1. 🔄 Callbacks

## `callback.js`

The `callback.js` example introduces the fundamental idea of passing a function to another function and executing it after an asynchronous operation.

The example uses `setTimeout()` to simulate an asynchronous operation:

```js
const greet = (username, callback) => {
    setTimeout(() => {
        console.log("Welcome");
        callback(username);
    }, 3000);
};

greet("John Doe", (username) => {
    console.log("Hello,", username);
});
```

### Concept demonstrated

```text
greet()
  │
  ├── start asynchronous operation
  │
  ├── wait
  │
  └── callback()
          │
          ▼
      continue work
```

This demonstrates an important Node.js programming pattern:

> "When this operation finishes, execute this function."

---

# 2. 🔥 Callback Hell

## `callback_hell.js`

When several asynchronous operations depend on the results of previous operations, callbacks can become deeply nested.

The example models a workflow such as:

```text
Get User
   │
   ▼
Get User Profile
   │
   ▼
Get User Posts
```

The repository demonstrates why deeply nested callbacks become difficult to read and maintain.

### Typical problem

```js
getUser(id, (user) => {
    getProfile(user.id, (profile) => {
        getPosts(profile.username, (posts) => {
            // more operations...
        });
    });
});
```

This pattern is commonly called:

**Callback Hell**

or

**Pyramid of Doom**

---

# 3. ✨ Resolving Callback Hell with Promises

## `resolve_callback_hell.js`

This example converts dependent asynchronous operations into Promise-based functions.

The repository defines functions such as:

```text
getUser()
getProfile()
getPosts()
```

and uses Promise chaining to represent the workflow more clearly.

Conceptually:

```text
getUser()
   │
   ▼
.then(getProfile)
   │
   ▼
.then(getPosts)
   │
   ▼
.catch(handleError)
```

This demonstrates one of the main reasons Promises are useful:

* Better readability
* Centralized error handling
* Easier composition
* Reduced nesting

---

# 4. 🤝 Promises

## `promise.js`

The repository introduces the three fundamental Promise states:

```text
             ┌─────────────┐
             │   Pending   │
             └──────┬──────┘
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
    ┌───────────┐       ┌───────────┐
    │ Fulfilled │       │  Rejected │
    └───────────┘       └───────────┘
```

The example simulates fetching user data:

```js
const fetchUserData = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve({
                id: 101,
                username: "Zishan"
            });
        } else {
            reject("failed to fetch the user data");
        }
    }, 1000);
});
```

The repository explicitly models the idea that the asynchronous operation could represent a:

* Database query
* Network request
* API call

This is a useful mental model for understanding real backend applications.

---

# 5. ⛓️ Promise Chaining

## `promises.js`

This file contains multiple Promise examples and demonstrates how asynchronous operations can be composed.

The core idea is:

```js
promise
    .then(...)
    .then(...)
    .catch(...)
    .finally(...);
```

Instead of nesting callbacks, each `.then()` receives the result of the previous asynchronous operation.

---

# 6. 📡 Events and EventEmitter

## `event.js`

Node.js is heavily based on an **event-driven architecture**.

The repository introduces `EventEmitter`:

```js
import EventEmitter from "node:events";

const emitter = new EventEmitter();
```

Listeners can then subscribe to events:

```js
emitter.on("orderPlaced", () => {
    console.log("Order placed");
});
```

Multiple listeners can respond to the same event:

```text
                  orderPlaced
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   Order placed   Send email    Update inventory
```

The example also demonstrates `once()`, which registers a listener that executes only once.

---

# 7. 🎯 Custom Events

## `customEvents.js`

The repository demonstrates how to create a custom class based on `EventEmitter`.

Example concept:

```js
class FileUploader extends EventEmitter {

    upload(filename) {
        console.log("File uploading start");

        this.emit("fileUpload", filename);
    }
}
```

A consumer can listen for the event:

```js
uploader.on("fileUpload", () => {
    console.log("File uploaded");
});
```

This illustrates an important Node.js pattern:

```text
Producer
   │
   │ emit()
   ▼
Event
   │
   ├── Listener 1
   ├── Listener 2
   └── Listener 3
```

The same architecture appears in larger systems such as:

* Order processing
* Logging
* Notifications
* File processing
* Message processing

---

# 8. 📦 CommonJS Modules

## `index.js`

The repository contains a simple CommonJS module example:

```js
function calculate_area(radius) {
    return 3.14 * radius * radius;
}

function calculate_perimeter(radius) {
    return 2 * 3.14 * radius;
}

module.exports = {
    calculate_area,
    calculate_perimeter
};
```

Another file can import these functions with:

```js
const {
    calculate_area,
    calculate_perimeter
} = require("./index");
```

This demonstrates the traditional Node.js CommonJS module system.

---

# 9. 🌐 ES Modules

## `esm.js`

The repository also introduces the modern ES Module syntax:

```js
export default function isCastVote(age) {
    if (age >= 18) {
        console.log("You can cast the vote");
    } else {
        console.log("not eligible");
    }
}
```

ES Modules use:

```js
export
import
```

instead of:

```js
module.exports
require()
```

### CommonJS vs ESM

| Feature         | CommonJS                         | ES Modules                        |
| --------------- | -------------------------------- | --------------------------------- |
| Export          | `module.exports`                 | `export`                          |
| Import          | `require()`                      | `import`                          |
| Example         | `require("./file")`              | `import x from "./file.js"`       |
| Node.js support | Yes                              | Yes                               |
| Standard        | Node.js historical module system | JavaScript standard module system |

---

# 10. 🔁 Synchronous vs Asynchronous Programming

## `sync_vs_async.js`

This example compares synchronous execution with asynchronous execution.

### Synchronous

```js
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

The operations execute sequentially.

### Asynchronous

```js
setTimeout(() => {
    console.log("Hello World");
}, 2000);
```

The timer schedules work to happen later while JavaScript continues executing the following statements.

The repository uses this example to demonstrate the difference between blocking/sequential execution and asynchronous scheduling.

---

# 11. 🔄 Node.js Event Loop

## `event_loop.js`

The repository includes an example involving:

* `fs.readFile()`
* `setTimeout()`
* `setImmediate()`
* `process.nextTick()`

Example:

```js
process.nextTick(() => {
    console.log("nextTick");
});

fs.readFile("intro.txt", "utf8", () => {

    setTimeout(() => {
        console.log("setTimeout inside fs");
    }, 0);

    setImmediate(() => {
        console.log("setImmediate inside fs");
    });

    console.log("File data read completed");
});
```

This is useful for studying how Node.js schedules different types of asynchronous work.

### Important concepts

```text
JavaScript execution
        │
        ▼
process.nextTick()
        │
        ▼
Event Loop
   ├── Timers
   ├── Pending callbacks
   ├── Poll
   ├── Check
   └── Close callbacks
```

This example is particularly useful when learning why:

```js
setTimeout(..., 0)
```

does **not** necessarily mean:

> "Execute immediately."

---

# 12. 📁 File System Module

The `file_system_module` directory contains a collection of examples demonstrating Node.js's built-in `fs` APIs. The directory includes CRUD examples, directory operations, file statistics, symbolic links, streams, file watching, and a mini web server.

---

# 13. ✍️ File CRUD Operations

The repository demonstrates three approaches:

```text
                    File System Operations
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
      Synchronous      Callback-based    Promises
      crud_sync.js     crud_async.js    crud_promises.js
```

---

## `crud_sync.js`

Demonstrates:

### Create

```js
fs.writeFileSync("notes.txt", "Hello Node.js");
```

### Read

```js
const data = fs.readFileSync("notes.txt", "utf8");
```

### Update

```js
fs.appendFileSync("notes.txt", " Hello ECE-B");
```

### Delete

```js
fs.rmSync("notes.txt");
```

### Important

Synchronous file APIs block the JavaScript thread until the operation completes.

They are useful for:

* Small scripts
* Initialization code
* CLI utilities
* Simple demonstrations

They should generally be avoided for high-throughput server request handling when asynchronous alternatives are appropriate.

---

# 14. ⚡ Asynchronous File Operations

## `crud_async.js`

The callback-based version demonstrates:

```js
fs.writeFile()
fs.readFile()
fs.appendFile()
fs.rm()
```

The code performs the basic CRUD lifecycle asynchronously.

This is closer to the programming style traditionally used in Node.js applications.

---

# 15. 🧩 Promise-based File System APIs

## `crud_promises.js`

The repository also demonstrates:

```js
import fs from "fs/promises";
```

and asynchronous functions such as:

```js
async function readFileContent(filename) {
    const data = await fs.readFile(filename, "utf8");
    console.log(data);
}
```

This approach combines Node.js asynchronous file operations with:

```js
async / await
```

---

# 16. 📂 Directory Operations

## `fs_dir.js`

This section explores operations involving directories rather than only individual files.

Typical concepts covered by this part of the repository include:

* Creating directories
* Reading directory contents
* Working with directory paths
* Removing directories
* Understanding the difference between files and directories

---

# 17. 📊 File Statistics

## `stats.js`

The repository contains an example dedicated to file metadata/statistics.

File statistics are useful when you need information such as:

```text
File
 │
 ├── Size
 ├── Creation time
 ├── Modification time
 ├── Access time
 ├── File type
 └── Permissions
```

This is useful for applications such as:

* File managers
* Upload systems
* Backup tools
* Storage monitoring
* Log analysis

---

# 18. 📏 File Size Checking

## `sizeChecker.js`

This example focuses on checking file size.

A similar pattern can be used in real applications for:

* Upload validation
* Storage monitoring
* Log rotation
* File processing pipelines

For example:

```text
Incoming file
      │
      ▼
Check size
      │
 ┌────┴────┐
 ▼         ▼
Allowed   Too large
 │         │
 ▼         ▼
Process   Reject
```

---

# 19. 🔗 Symbolic Links

The repository includes:

```text
symbolic_link.js
symlink_application.js
link.txt
```

These examples demonstrate symbolic links and how they can be used to reference another filesystem location without duplicating the original file.

Conceptually:

```text
Original File
     ▲
     │
     │ points to
     │
Symbolic Link
```

Symbolic links can be useful for:

* Shared resources
* Configuration files
* Versioned deployments
* Aliases
* Development environments

---

# 20. 🌊 Streams

## `file_system_module/Streams`

The Streams directory contains:

```text
Streams/
├── intro.txt
└── stream.js
```

Streams are one of the most important Node.js concepts for handling large amounts of data efficiently.

Instead of loading an entire file into memory:

```text
10 GB File
   │
   ▼
Load everything
   │
   ▼
Memory usage becomes huge
```

a stream processes the data incrementally:

```text
10 GB File
   │
   ├── Chunk 1 ──► Process
   ├── Chunk 2 ──► Process
   ├── Chunk 3 ──► Process
   ├── Chunk 4 ──► Process
   └── ...
```

---

## Readable Stream

The repository creates a readable stream with:

```js
const readStream = fs.createReadStream(
    "intro.txt",
    {
        encoding: "utf8",
        highWaterMark: 10
    }
);
```

The `highWaterMark` controls the approximate amount of data read per chunk in this example.

---

## Stream Events

The example demonstrates events such as:

```js
readStream.on("end", () => {
    console.log("File reading Completed");
});
```

and:

```js
readStream.on("error", (error) => {
    console.log("Error:", error.message);
});
```

---

## Writable Stream

The repository creates a writable stream:

```js
const writeStream = fs.createWriteStream("output.txt");
```

and handles errors using:

```js
writeStream.on("error", (error) => {
    console.log("Error:", error.message);
});
```

---

## `pipe()`

The most important line is:

```js
readStream.pipe(writeStream);
```

This connects the readable stream to the writable stream.

```text
intro.txt
   │
   ▼
Readable Stream
   │
   │ pipe()
   ▼
Writable Stream
   │
   ▼
output.txt
```

This is a fundamental Node.js pattern.

---

# 21. 👀 File Watching

## `file_system_module/file_watcher`

The repository contains:

```text
file_watcher/
├── notes.txt
├── watch.js
└── watchFile.js
```

Two different Node.js APIs are demonstrated:

```text
fs.watch()
     │
     ▼
watch.js

fs.watchFile()
     │
     ▼
watchFile.js
```

---

# 22. `fs.watch()`

## `watch.js`

The example watches a file using:

```js
const watcher = fs.watch(
    "notes.txt",
    (eventType, filename) => {
        console.log("Event:", eventType);
        console.log("Filename:", filename);
    }
);
```

It also demonstrates stopping the watcher:

```js
watcher.close();
```

### Useful for

* Development servers
* Hot reload systems
* Configuration monitoring
* Build tools
* File-based automation

---

# 23. `fs.watchFile()`

## `watchFile.js`

The repository also demonstrates:

```js
fs.watchFile("notes.txt", (prev, curr) => {
    // file metadata can be compared here
});
```

This API provides previous and current file statistics, allowing changes to be detected by comparing metadata.

---

# 24. 🚀 Mini Web Development Server

One of the most interesting projects in this repository is:

```text
file_system_module/
└── mini-web-server/
```

It contains:

```text
mini-web-server/
│
├── public/
│   ├── index.html
│   └── style.css
│
├── logs.txt
├── server.js
└── watcher.js
```

This project combines several Node.js concepts:

* HTTP server
* File System module
* Streams
* `path`
* Child processes
* `fs.watch()`
* Server-Sent Events
* Static file serving
* MIME types
* Error handling
* Browser live reload

---

# 25. 🏗️ Mini Server Architecture

The project follows this architecture:

```text
                    Browser
                       │
                       │ HTTP
                       ▼
                 ┌───────────┐
                 │ server.js │
                 └─────┬─────┘
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
       HTTP          File         SSE
       Server       System       /__reload
          │            │            │
          │            ▼            │
          │        public/          │
          │            │            │
          │            ▼            │
          │       index.html        │
          │       style.css         │
          │                         │
          │                         │
          └─────────────┬───────────┘
                        │
                        ▼
                   Browser reload
```

---

# 26. 🌐 HTTP Server

`server.js` creates a Node.js HTTP server:

```js
const server = http.createServer((req, res) => {
    // request handling
});
```

The server listens on:

```text
http://localhost:3000
```

The server configuration and static-file handling are implemented directly using Node.js core modules rather than Express.

---

# 27. 📁 Static File Serving

When a browser requests:

```text
/
```

the server serves:

```text
public/index.html
```

For another path, the requested resource is resolved under:

```text
public/
```

The server then checks whether the requested path represents a file before serving it.

---

# 28. 🛡️ Directory Traversal Protection

The mini server contains a security check before serving files:

```js
if (!filePath.startsWith(publicFolder)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
}
```

This demonstrates an important backend principle:

> Never blindly expose arbitrary filesystem paths requested by a client.

---

# 29. 📄 MIME / Content Types

The server determines the response content type from the file extension.

For example:

```text
.html → text/html
.css  → text/css
.js   → text/javascript
.json → application/json
```

This allows browsers to correctly interpret the returned resources.

---

# 30. 🌊 Streaming Files to the Browser

Instead of reading the complete file into memory, the mini server uses:

```js
const readStream = fs.createReadStream(filePath);

readStream.pipe(res);
```

This creates the following pipeline:

```text
File
 │
 ▼
fs.createReadStream()
 │
 ▼
Readable Stream
 │
 ▼
HTTP Response
 │
 ▼
Browser
```

This is a practical demonstration of why Streams are important in backend development.

---

# 31. 🔥 Server-Sent Events

The mini server contains a special endpoint:

```text
/__reload
```

It establishes a Server-Sent Events connection with the browser.

The server sends:

```http
Content-Type: text/event-stream
```

and keeps the connection open.

Conceptually:

```text
Browser
   │
   │ GET /__reload
   ▼
Node.js Server
   │
   │ persistent connection
   │
   ◄──────── file change
   │
   ▼
SSE message
   │
   ▼
Browser
```

---

# 32. 👁️ Child Process Watcher

The main server launches a separate Node.js process:

```js
const { fork } = require("child_process");

const watcher = fork(
    path.join(__dirname, "watcher.js")
);
```

This separates file watching from the main HTTP server process.

The architecture becomes:

```text
              server.js
                 │
                 │ fork()
                 ▼
              watcher.js
                 │
                 │ fs.watch()
                 ▼
              public/
                 │
                 │ file changed
                 ▼
             process.send()
                 │
                 ▼
              server.js
                 │
                 ▼
             SSE message
                 │
                 ▼
              Browser
```

---

# 33. 🔁 Live Reload Workflow

The complete live-reload process works conceptually like this:

```text
1. Start server
        │
        ▼
2. Browser requests index.html
        │
        ▼
3. Browser opens /__reload
        │
        ▼
4. watcher.js watches public/
        │
        ▼
5. Developer modifies style.css
        │
        ▼
6. fs.watch() detects change
        │
        ▼
7. watcher.js sends message to server
        │
        ▼
8. server.js sends SSE message
        │
        ▼
9. Browser receives event
        │
        ▼
10. Browser reloads
```

This is a simplified version of the kind of mechanism used by development tooling.

---

# 34. 📝 Change Logging

The watcher also writes information about detected changes into:

```text
logs.txt
```

This demonstrates how file monitoring can be combined with logging.

---

# 35. ▶️ Running the Examples

Clone the repository:

```bash
git clone https://github.com/Zishan21830/Node.js.git
```

Move into the project:

```bash
cd Node.js
```

No external npm package is required for the examples currently visible in the repository; they primarily use Node.js built-in modules.

Check your Node.js installation:

```bash
node --version
```

---

# 36. ▶️ Running Root Examples

For example:

```bash
node callback.js
```

```bash
node callback_hell.js
```

```bash
node promise.js
```

```bash
node promises.js
```

```bash
node event.js
```

```bash
node event_loop.js
```

```bash
node sync_vs_async.js
```

---

# 37. ▶️ Running File System Examples

Move into the filesystem directory:

```bash
cd file_system_module
```

Examples:

```bash
node crud_sync.js
```

```bash
node crud_async.js
```

```bash
node crud_promises.js
```

```bash
node fs_dir.js
```

```bash
node stats.js
```

```bash
node sizeChecker.js
```

---

# 38. ▶️ Running Stream Example

```bash
cd file_system_module/Streams
```

Run:

```bash
node stream.js
```

The program reads from:

```text
intro.txt
```

and streams its contents into:

```text
output.txt
```

using:

```js
readStream.pipe(writeStream);
```

---

# 39. ▶️ Running File Watchers

Navigate to:

```bash
cd file_system_module/file_watcher
```

Run:

```bash
node watch.js
```

Then modify:

```text
notes.txt
```

The watcher will report the detected filesystem event.

You can also experiment with:

```bash
node watchFile.js
```

and modify `notes.txt`.

---

# 40. ▶️ Running the Mini Web Server

Navigate to:

```bash
cd file_system_module/mini-web-server
```

Start the server:

```bash
node server.js
```

You should see:

```text
Mini Dev Server running at http://localhost:3000
```

Open:

```text
http://localhost:3000
```

The server serves files from:

```text
public/
```

and watches the directory for changes.

---

# 41. 🧪 Suggested Experiments

This repository becomes much more useful when you modify the examples instead of only running them.

## Experiment 1 — Callback delay

Change:

```js
setTimeout(..., 3000)
```

to:

```js
setTimeout(..., 1000)
```

Observe the difference.

---

## Experiment 2 — Promise failure

Change:

```js
let success = true;
```

to:

```js
let success = false;
```

Observe how the Promise moves from:

```text
Pending
   ↓
Rejected
```

---

## Experiment 3 — EventEmitter

Add another listener:

```js
emitter.on("orderPlaced", () => {
    console.log("Send SMS");
});
```

Now one event triggers multiple independent operations.

---

## Experiment 4 — Stream chunk size

Change:

```js
highWaterMark: 10
```

to:

```js
highWaterMark: 5
```

Then observe the chunks received by the stream.

---

## Experiment 5 — File watcher

Modify:

```text
notes.txt
```

while `watch.js` is running.

Observe:

```text
eventType
filename
```

---

## Experiment 6 — Mini server

Modify:

```text
public/index.html
```

or:

```text
public/style.css
```

while the mini server is running.

Observe how the watcher detects the change and communicates it to the server.

---

# 42. 🧠 Key Node.js Concepts Covered

| Concept            | Example                     |
| ------------------ | --------------------------- |
| Callback           | `callback.js`               |
| Callback Hell      | `callback_hell.js`          |
| Promise            | `promise.js`                |
| Promise workflows  | `promises.js`               |
| Callback → Promise | `resolve_callback_hell.js`  |
| Events             | `event.js`                  |
| Custom Events      | `customEvents.js`           |
| CommonJS           | `index.js`                  |
| ES Modules         | `esm.js`                    |
| Sync vs Async      | `sync_vs_async.js`          |
| Event Loop         | `event_loop.js`             |
| File CRUD          | `crud_*.js`                 |
| Directories        | `fs_dir.js`                 |
| File metadata      | `stats.js`                  |
| File size          | `sizeChecker.js`            |
| Symbolic links     | `symbolic_link.js`          |
| Streams            | `Streams/stream.js`         |
| File watching      | `file_watcher/`             |
| HTTP server        | `mini-web-server/server.js` |
| Static files       | `mini-web-server/public/`   |
| SSE                | `mini-web-server/server.js` |
| Child process      | `mini-web-server/server.js` |
| Live reload        | `mini-web-server/`          |

---

# 43. 🎓 What You Can Learn From This Repository

After working through the repository, you should be able to explain:

### JavaScript asynchronous programming

* What a callback is
* Why callback hell occurs
* What a Promise represents
* Promise states
* Promise chaining
* Error handling

### Node.js architecture

* Event-driven programming
* EventEmitter
* Event loop
* `process.nextTick()`
* `setTimeout()`
* `setImmediate()`

### Node.js modules

* CommonJS
* ES Modules
* Import/export mechanisms

### File System

* Creating files
* Reading files
* Updating files
* Deleting files
* Directory operations
* File statistics
* Symbolic links
* File watching

### Streams

* Readable streams
* Writable streams
* Chunks
* `pipe()`
* Stream events
* Efficient file processing

### Backend fundamentals

* HTTP server creation
* Request/response handling
* Static file serving
* Content types
* Error handling
* File streaming
* Server-Sent Events
* Child processes
* Live reload

---

# 44. 🏭 Real-World Applications

The concepts in this repository map directly to real backend systems.

| Repository Concept  | Real-World Application       |
| ------------------- | ---------------------------- |
| Callbacks           | Legacy Node.js APIs          |
| Promises            | Database/API operations      |
| EventEmitter        | Internal application events  |
| Event Loop          | Concurrent request handling  |
| `fs`                | File processing              |
| Streams             | Large file uploads/downloads |
| `fs.watch()`        | Development tooling          |
| SSE                 | Live notifications           |
| Child processes     | Worker processes             |
| HTTP server         | Backend web servers          |
| Static file serving | Development servers          |
| File logging        | Application monitoring       |
| Live reload         | Developer experience tooling |

---

# 45. ⚠️ Educational Notes

This repository is primarily intended for **learning and experimentation**.

Some examples are intentionally small and simplified so that a particular Node.js concept is easy to understand.

They should not automatically be treated as production-ready implementations.

For production applications, you would typically add:

* Input validation
* Structured logging
* Better error handling
* Graceful shutdown
* Security hardening
* Configuration management
* Automated tests
* Dependency management
* Request routing
* Authentication/authorization
* Rate limiting
* Observability
* Proper MIME-type handling
* Robust path validation

---

# 46. 🔍 Current Examples Worth Reviewing

A few examples are especially useful as exercises because they can be improved further.

### ESM import/export

`esm.js` currently uses a default export:

```js
export default function isCastVote(age) {
    // ...
}
```

while `main.js` imports it using a named import:

```js
import { isCastVote } from './esm.js';
```

These two styles do not match.

You can either use:

```js
import isCastVote from "./esm.js";
```

or change the export to a named export.

---

### File watcher cleanup

The `watchFile.js` example is useful for demonstrating `fs.watchFile()`, but the cleanup call should be reviewed against the actual `fs.unwatchFile()` API.

The important lesson is that the watcher should be explicitly stopped using the appropriate API and arguments.

---

### Mini-server watcher

`watcher.js` contains a stray `_` expression before `fs.watch()`. This should be removed before executing the watcher.

---

### Async CRUD ordering

The callback-based CRUD example starts create, read, append, and delete operations independently. In a real application, these operations may need to be sequenced because:

```text
write
  ↓
read
  ↓
append
  ↓
delete
```

should generally happen in a controlled order.

This is actually a useful exercise for learning why asynchronous control flow matters.

---

# 47. 🛠️ Suggested Future Improvements

This repository can gradually evolve from a collection of examples into a complete Node.js learning curriculum.

Potential additions:

```text
Node.js
│
├── HTTP
│   ├── HTTP server
│   ├── Routing
│   ├── Headers
│   ├── Status codes
│   └── Request body
│
├── File System
│   ├── CRUD
│   ├── Streams
│   └── Watchers
│
├── Async Programming
│   ├── Callbacks
│   ├── Promises
│   └── Async/Await
│
├── Events
│   ├── EventEmitter
│   └── Custom events
│
├── Modules
│   ├── CommonJS
│   └── ES Modules
│
├── Networking
│   ├── HTTP
│   ├── TCP
│   └── WebSockets
│
├── Backend Architecture
│   ├── Controllers
│   ├── Services
│   ├── Middleware
│   └── Error handling
│
├── Database
│   ├── MongoDB
│   ├── PostgreSQL
│   └── Redis
│
├── Authentication
│   ├── Sessions
│   ├── JWT
│   └── OAuth
│
└── Production
    ├── Testing
    ├── Logging
    ├── Docker
    ├── CI/CD
    └── Deployment
```

---

# 48. 🎯 Recommended Learning Strategy

Don't simply execute each file once.

For every example:

### 1. Run it

```bash
node filename.js
```

### 2. Predict the output

Before executing it, ask:

> What will happen first?

### 3. Execute it

Compare your prediction with the actual output.

### 4. Modify one thing

For example:

```js
setTimeout(..., 1000)
```

→

```js
setTimeout(..., 5000)
```

### 5. Explain it

Try explaining the code without looking at it.

### 6. Build something

Use the concept in a small project.

This approach turns the repository from a collection of code snippets into a practical Node.js learning environment.

---

# 49. 🚀 From Examples to Projects

After completing these examples, good next projects include:

### Project 1 — File Manager

Use:

```text
fs
path
streams
```

Build:

* List files
* Create files
* Rename files
* Delete files
* Read files
* Show file size

---

### Project 2 — Log Monitor

Use:

```text
fs.watch()
fs.createReadStream()
EventEmitter
```

Build a system that detects changes in log files and displays new entries.

---

### Project 3 — Mini Development Server

Extend the existing mini server with:

* Automatic reload
* Better routing
* MIME type map
* 404 page
* Directory listing
* Request logging
* Compression
* Cache headers

---

### Project 4 — Event-Driven Order System

Use `EventEmitter`:

```text
Order Created
     │
     ├── Send confirmation
     ├── Update inventory
     ├── Generate invoice
     └── Send notification
```

This converts the EventEmitter examples into a realistic backend architecture.

---

# 50. 📖 Useful Resources

* [Node.js Documentation](https://nodejs.org/docs/latest/api/)
* [Node.js File System API](https://nodejs.org/docs/latest/api/fs.html)
* [Node.js Streams API](https://nodejs.org/docs/latest/api/stream.html)
* [Node.js Events API](https://nodejs.org/docs/latest/api/events.html)
* [Node.js HTTP API](https://nodejs.org/docs/latest/api/http.html)
* [Node.js Child Process API](https://nodejs.org/docs/latest/api/child_process.html)
* [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

# 👨‍💻 Repository

**GitHub:**
https://github.com/Zishan21830/Node.js

---

## ⭐ Final Goal

The purpose of this repository is not just to learn individual Node.js APIs.

The bigger goal is to understand how the pieces fit together:

```text
JavaScript
    │
    ▼
Asynchronous Programming
    │
    ▼
Event Loop
    │
    ▼
Events
    │
    ▼
Node.js Core APIs
    │
    ├── fs
    ├── stream
    ├── events
    ├── http
    └── child_process
    │
    ▼
Backend Applications
    │
    ▼
Real-World Node.js Systems
```

> **Learn the concept → run the example → modify the code → break it → debug it → build something with it.**

That is the intended learning philosophy behind this repository.
