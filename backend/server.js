const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io")
const cors = require("cors");

//Middleware for Resolving Connection errors
app.use(cors());

//Setting up Server 
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
})

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`)

    socket.on("send_message", (data) => {
        socket.broadcast.emit("recieve_message", data)
    })
})

server.listen(3000, () => {
    console.log("Listening on port 3000");
})