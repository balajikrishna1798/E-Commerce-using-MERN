const cors = require("cors")
const http = require("http")
const express = require("express")
const fs = require("fs")
const app = express()
const server = http.createServer(app)
const {Server} = require("socket.io")
const io = new Server({
    cors:"*",
    methods:"*"
})
require("./connection")
const port = 5000;
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

server.listen(port,()=>{
    console.log(`Server is connected at ${port}`);
})

