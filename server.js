const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// The above code is a simple Node.js HTTP server. However, it may contain a bug that's difficult to detect in complex applications.
// This bug is related to improper error handling. The server doesn't handle errors that might occur during request handling. For instance, if an exception is thrown within the request handler, the server will crash.