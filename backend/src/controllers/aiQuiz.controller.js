import { generateQuizFromAI } from "../services/groq.service.js";

export const generateQuiz = async (req, res) => {
  try {
    const { notes, videoTitle } = req.body;

   
    const quiz = await generateQuizFromAI(notes, videoTitle);

    res.json({
      success: true,
      quiz
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};