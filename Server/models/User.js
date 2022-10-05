const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        validate:{
            validator:function(str){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
            },
        message:props=>`${props.value} is not a valid Email`
        }
    }

})