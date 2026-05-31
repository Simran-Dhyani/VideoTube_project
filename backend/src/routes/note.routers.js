import { verifyJWT } from "../middlewares/auth.middleware.js";
import { Router } from "express";
import createNote from "../controllers/note.controller.js";

const router=Router()
router.route("/").post(verifyJWT,createNote)
export default router