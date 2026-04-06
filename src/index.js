import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"
dotenv.config({
    path:'./.env'
})
connectDB()
.then(()=>{
    app.on("error",(e)=>{
        console.log(e);
        throw e;

    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server running on port:${process.env.PORT}`);
    })
})
.catch((e)=>{
    console.log("connection failes",e);
})