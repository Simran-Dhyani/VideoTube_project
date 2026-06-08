import mongoose,{Schema}  from "mongoose";
const noteSchema=new Schema({
    content:{
        type:String,
        required:true

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    },
    videoId:{
        type:String,
        required:true


    },
     videoTitle:{
            type:String,
            required:true
     },
    

},{timestamps:true})
export const Note=mongoose.model("note",noteSchema)
