import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Note } from "../models/note.model.js"

// save notes 
const createNote=asyncHandler(async(req,res)=>{
//read data from req.body
//validate data
//get user id from req.user
//save notes in mongoDB
//return res

const {videoId,content}=req.body
if(!videoId || !content){
    throw new ApiError(400,"videoId or content is missing")
}
const currentUser=req.user?._id

const notes=await Note.create({
    user:currentUser,
    videoId,
    content
})

if(!notes){
    throw new ApiError(409,"Notes not found !!")
}
return res.status(201).json(
    new ApiResponse(200,notes,"Notes saved successfully !!")
)
})



// get notes or display notes
const getNotes=asyncHandler(async(req,res)=>{
    const {videoId}=req.params;
    const notes=await Note.find({
        user:req.user?._id,
        videoId
    })
    return res.status(200).json(
     new ApiResponse(200, notes, "Notes fetched successfully")
    );
})


// delete  notes

const deleteNote = asyncHandler(async (req, res) => {
    const { noteId } = req.params;

    await Note.findOneAndDelete({
        _id: noteId,
        user: req.user._id,
    });

    return res.status(200).json(
        new ApiResponse(200, {}, "Note deleted")
    );
});

//edit notes
const updateNote = asyncHandler(async (req, res) => {
    const { noteId } = req.params;
    const { content } = req.body;

    const note = await Note.findOneAndUpdate(
        {
            _id: noteId,
            user: req.user._id,
        },
        {
            content,
        },
        {
            new: true,
        }
    );

    return res.status(200).json(
        new ApiResponse(200, note, "Note updated")
    );
});

export { createNote, getNotes,deleteNote,updateNote }