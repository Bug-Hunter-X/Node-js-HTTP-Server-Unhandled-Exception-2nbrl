# Node.js HTTP Server Unhandled Exception

This repository demonstrates a common but subtle error in Node.js HTTP servers: unhandled exceptions.  The `server.js` file contains a server vulnerable to crashes due to unhandled errors within the request handler.  The solution, `server-fixed.js`, shows how to gracefully handle these exceptions using a `try...catch` block.

## Bug

The original server lacks error handling within the request handler.  Any unexpected exception thrown during request processing will cause the server to terminate unexpectedly, leading to downtime.

## Solution

The solution demonstrates the use of a `try...catch` block to wrap the request handling logic. This ensures that if an exception occurs, it is caught and handled appropriately, preventing the server from crashing.  The example logs the error to the console, allowing for debugging and monitoring, and sends a suitable error response to the client. This improves the robustness and reliability of the server.