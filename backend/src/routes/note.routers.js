import { verifyJWT } from "../middlewares/auth.middleware.js";
import { Router } from "express";
import {createNote,getNotes,deleteNote,updateNote } from "../controllers/note.controller.js";


const router=Router()
router.route("/").post(verifyJWT,createNote)
router.route("/:videoId").get(verifyJWT,getNotes)
router.route("/:noteId").delete(verifyJWT, deleteNote)
router.route("/:noteId").patch(verifyJWT, updateNote)
export default router