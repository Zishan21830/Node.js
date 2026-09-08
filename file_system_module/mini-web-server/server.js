const http = require("http");
const fs = require("fs");
const path = require("path");
const { fork } = require("child_process");

const PORT = 3000;

const publicFolder = path.join(__dirname, "public");


// ------------------------------------
// Connected browsers
// ------------------------------------

const clients = [];


// ------------------------------------
// Start watcher process
// ------------------------------------

const watcher = fork(
    path.join(__dirname, "watcher.js")
);


// ------------------------------------
// Receive message from watcher
// ------------------------------------

watcher.on("message", (message) => {

    console.log(
        `Changed: ${message.filename}`
    );

    // Notify all connected browsers

    clients.forEach((client) => {

        client.write(
            `data: ${message.filename}\n\n`
        );

    });

});


// ------------------------------------
// Create HTTP server
// ------------------------------------

const server = http.createServer((req, res) => {

    console.log(req.method, req.url);


    // --------------------------------
    // SSE connection for live reload
    // --------------------------------

    if (req.url === "/__reload") {

        res.writeHead(200, {

            "Content-Type": "text/event-stream",

            "Cache-Control": "no-cache",

            "Connection": "keep-alive"

        });

        clients.push(res);

        console.log("Browser connected for live reload");


        // Remove disconnected clients

        req.on("close", () => {

            const index = clients.indexOf(res);

            if (index !== -1) {

                clients.splice(index, 1);

            }

        });

        return;
    }


    // --------------------------------
    // Determine requested file
    // --------------------------------

    let filePath;

    if (req.url === "/") {

        filePath = path.join(
            publicFolder,
            "index.html"
        );

    } else {

        filePath = path.join(
            publicFolder,
            req.url
        );

    }


    // --------------------------------
    // Prevent directory traversal
    // --------------------------------

    if (!filePath.startsWith(publicFolder)) {

        res.writeHead(403);

        res.end("Forbidden");

        return;

    }


    // --------------------------------
    // Check file
    // --------------------------------

    fs.stat(filePath, (err, stats) => {

        if (err || !stats.isFile()) {

            res.writeHead(404, {
                "Content-Type": "text/plain"
            });

            res.end("404 - File Not Found");

            return;

        }


        // --------------------------------
        // Content type
        // --------------------------------

        const extension =
            path.extname(filePath);

        let contentType = "text/plain";

        if (extension === ".html") {

            contentType = "text/html";

        } else if (extension === ".css") {

            contentType = "text/css";

        } else if (extension === ".js") {

            contentType = "text/javascript";

        } else if (extension === ".json") {

            contentType = "application/json";

        }


        // --------------------------------
        // Send headers
        // --------------------------------

        res.writeHead(200, {

            "Content-Type": contentType

        });


        // --------------------------------
        // Read file using Stream
        // --------------------------------

        const readStream =
            fs.createReadStream(filePath);


        // --------------------------------
        // Stream file to browser
        // --------------------------------

        readStream.pipe(res);


        // --------------------------------
        // Error handling
        // --------------------------------

        readStream.on("error", (err) => {

            console.log("Stream error:", err.message);

            if (!res.headersSent) {

                res.writeHead(500);

            }

            res.end("Internal Server Error");

        });

    });

});


// ------------------------------------
// Start server
// ------------------------------------

server.listen(PORT, () => {

    console.log(
        `Mini Dev Server running at http://localhost:${PORT}`
    );

});