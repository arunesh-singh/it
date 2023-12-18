const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world, This is my Node.js server\n");
});

const PORT = 10000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
