const cors = require("cors")
const http = require("http")
const express = require("express")
const fs = require("fs")
const app = express()
const server = http.createServer(app)
const {Server} = require("socket.io")
const io = new Server(server,{
    cors:"*",
    methods:"*"
})
require("./connection")
const port = 5000;
const User = require("./models/User")
const userRoutes = require("./routes/UserRoutes")


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/users",userRoutes)

server.listen(port,()=>{
    console.log(`Server is connected at ${port}`);
})

