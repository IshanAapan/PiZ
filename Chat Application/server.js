const http = require("http");
const fs = require("fs");

const messages = [];
const users =[];

const addMessage = (user, text,recepiet) => {
  messages.push({ user, text,recepiet });
};

const addUsers = (user) => {
  users.push({ user });
};
const page = fs.readFileSync("./public/index.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/getMessages") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(messages));
    // read index.html file and send it to the client
  } else if (req.url === "/addMessage" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const { user, text,recepiet } = JSON.parse(body);
      addMessage(user, text,recepiet);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "Message added" }));
    });
  } else if (req.url === "/getUser") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
    // read index.html file and send it to the client
  } else if (req.url === "/addUser" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const { user } = JSON.parse(body);
      addUsers(user);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "User Added" }));
    });
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(page);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
