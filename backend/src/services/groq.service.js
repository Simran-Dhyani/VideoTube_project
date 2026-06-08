export const generateQuizFromAI = async ({ notes, videoTitle }) => {

  const prompt = `
You are an expert teacher.

Generate a quiz from the following content.

RULES:
- 5 MCQ questions
- 4 options each
- only one correct answer
- return ONLY valid JSON
- no explanation text

VIDEO URL:
${videoTitle}

NOTES:
${notes}

OUTPUT FORMAT:
{
  "quizTitle": "string",
  "questions": [
    {
      "question": "string",
      "options": ["A", "B", "C", "D"],
      "answer": "string"
    }
  ]
}
`;

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    })
  });

  const data = await response.json();

  const text = data.choices[0].message.content;

  return JSON.parse(text);
};