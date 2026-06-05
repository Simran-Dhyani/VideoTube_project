import { verifyJWT } from "../middlewares/auth.middleware.js";
import { Router } from "express";
import {createNote,getNotes } from "../controllers/note.controller.js";


const router=Router()
router.route("/").post(verifyJWT,createNote)
router.route("/:videoId").get(verifyJWT,getNotes)
export default router