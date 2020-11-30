const mongoose = require ('mongoose');


const noteSchema = new mongoose.Schema({
    "id":{
        "type":Number
    
    },
    
    "title":{
        "type":String
        

    },
    "content":{
        "type":String      
    }

    
})


module.exports= mongoose.model("Note",noteSchema);
