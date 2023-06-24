const express = require("express");

const cors = require("cors");
const bodyParser = require('body-parser')

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


const studentroutes = require('./routes/StudentRoutes')
const mentorroutes = require('./routes/MentorRoutes')

app.use('/api/student',studentroutes)
app.use('/api/mentor',mentorroutes)


const server = require("http").createServer(app)
const io = require("socket.io")(server, {
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