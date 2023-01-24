const express = require("express");
const socketIO = require("socket.io");
const path = require("path");

// Configuration
const PORT = process.env.PORT || 5000;
const INDEX = path.join(__dirname, 'index.html');
//

// Start server
const server = express()
    .use((req, res) => res.sendFile(INDEX))
    .listen(PORT, () => console.log("Listening on localhost:" + PORT));

// Initiatlize SocketIO
const io = socketIO(server);

// Register "connection" events to the WebSocket
io.on("connection", function (socket) {


    setTimeout(() => {
        socket.emit("instruction", "world");
    }, 40000);


});