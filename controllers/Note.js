const noteRouter = require("express") .Router();
//const { response } = require("express");
const Note = require('../models/Note');



noteRouter.get('/',(request,response,next)=>{

    Note.find({

    }).then(res=>{
        response.status(200).send(res)
        next();
    })
})


noteRouter.post('/',async(request,response,next)=>{
    
    const title = request.body.title;
    const content = request.body.content;
    console.log(request.body.title);

    if (title && content){
        const noteCount = await Note.countDocuments();// mongodb function for counting

        const newNote =  new Note({
            id: noteCount +1,
            title: title,
            content: content
        })

        newNote.save()
        .then(res=>{
            response.status(201).send(res);
        })
        .catch(err=>{
            console.log(err)
            response.sendStatus(501);
        })
    }

    else{

        response.status(400).send({
            message:"Check your request body"
        })
    }
});




module.exports = noteRouter;