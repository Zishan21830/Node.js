// Import Node.js built-in HTTP module
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {

  /*
    req = Request object
    --------------------
    req.method → tells us the HTTP method
                  GET, POST, PUT, DELETE, etc.

    req.url → tells us which URL the client requested
              Example: /users/10
  */

  console.log("Method:", req.method);
  console.log("URL:", req.url);


  // 1. GET METHOD
  // GET is generally used to READ / FETCH data.

  if (req.method === "GET" && req.url === "/users") {

    console.log("GET request received");

    // Send response to the client
    res.end("Here are all users");
  }


  // 2. POST METHOD
  // POST is generally used to CREATE new data.

  else if (req.method === "POST" && req.url === "/users") {

    console.log("POST request received");

    // Normally, we would receive data from the client
    // and save it into a database.

    res.end("New user created");
  }


  // 3. PUT METHOD
  // PUT is generally used to UPDATE existing data.

  // Example request:
  // PUT /users/101

  else if (
    req.method === "PUT" &&
    req.url.startsWith("/users/")
  ) {

    console.log("PUT request received");

    /*
      Example:

      req.url = "/users/101"

      split("/") gives:

      ["", "users", "101"]

      [2] gives us:

      "101"
    */

    const id = req.url.split("/")[2];

    console.log("User ID:", id);

    res.end(`User ${id} updated`);
  }


  // 4. DELETE METHOD
  // DELETE is generally used to DELETE existing data.

  // Example request:
  // DELETE /users/101

  else if (
    req.method === "DELETE" &&
    req.url.startsWith("/users/")
  ) {

    console.log("DELETE request received");

    // Extract user ID from URL
    const id = req.url.split("/")[2];

    console.log("User ID:", id);

    res.end(`User ${id} deleted`);
  }

  // 5. ROUTE NOT FOUND
  else {

    // If none of the above conditions match
    res.statusCode = 404;

    res.end("404 - Page Not Found");
  }
});

// START SERVER

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});