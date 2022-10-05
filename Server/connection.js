const mongoose = require("mongoose");
require("dotenv").config()
const connectionstr = process.env.MONGO_DB_URL

mongoose.connect(connectionstr,()=>console.log("Connected to mongoDB"))