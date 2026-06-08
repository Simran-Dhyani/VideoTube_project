import { Router } from "express";
import { generateQuiz } from "../controllers/aiQuiz.controller.js";
const router=Router()
router.route("/generate-quiz").post(generateQuiz)
export default router