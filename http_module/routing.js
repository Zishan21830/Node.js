import http from "http";
import fs from "fs";

const pageNotFoundPage = fs.readFileSync("./pageNOtFound.html", "utf8");
const config = fs.readFileSync("./config.json", "utf8");

const server = http.createServer((req, res) => {
  // res.end("Welcome from server")
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Home Page");
  } else if (req.url === "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Contact Page");
  } else if (req.url === "/projects") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(config);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    res.end(pageNotFoundPage);
  }
});
server.listen(3000, () => {
  console.log("Server is Running...");
});
