import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Note } from "../models/note.model.js"
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

export default createNote