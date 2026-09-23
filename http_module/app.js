// Import Node.js's built-in HTTP module.
// We use this module to create an HTTP server.
import http from "http";

// createServer() creates an HTTP server.
// The callback function runs every time a client sends a request.
const server = http.createServer((req, res) => {
  // This will be printed in the terminal whenever
  // the server receives a request.
  console.log("Hello");

  // writeHead() is used to send the status code
  // and response headers to the client.
  //
  // 200 means the request was successful.
  res.writeHead(200, {
    // Tell the client that our response contains JSON data.
    "Content-Type": "application/json",

    // We can also create our own custom response headers.
    "custom-header": "Hello",
  });
  // We can create a JavaScript object and send it
  // to the client as JSON.
  //
  const order = {
    orderId: 123,
    ordername: "iphone",
  };

  //   res.end() finishes the response and sends it
  // back to the client.
  //
  // JSON.stringify() converts the JavaScript object
  // into a JSON string before sending it.
  //
    res.end(JSON.stringify(order));
});

const PORT = 3000;

// 127.0.0.1 means the server will be available
// on the local computer.
const ADDRESS = "127.0.0.1";

// listen() starts the server and tells it
// to wait for incoming requests on the given
// port and address.
server.listen(PORT, ADDRESS, () => {
  // This message is printed after the server
  // successfully starts listening for requests.
  console.log("Server is running...");
});
