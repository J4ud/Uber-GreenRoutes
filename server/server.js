const { createServer } = require("http");

const app = require("./app.js");
const { initSocket } = require("./socket.js");

const httpServer = createServer(app) // Explicity creates an HTTP server from the Express app

// Initialize Socket.IO
initSocket(httpServer);

httpServer.listen(5055, () => console.log("server starting 🚀🆙✔ on http://localhost:5055"));