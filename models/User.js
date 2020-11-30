const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    firstName:{
        type:String,
        required:true,
        maxlength:15
    },

    lastName:{
        type:String,
        required:true,
        maxlength:15
    },
    email:{
        type:String,
        required:true
    },
    passwordHash:{
        type:Number,
        required:true
    }
        


})

module.exports= mongoose.model("User",userSchema);