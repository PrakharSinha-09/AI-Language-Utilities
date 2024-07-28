const express = require('express');
const app = express();
const cors=require('cors')
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

app.post('/translate', async (req, res) => {
    const { text, sourceLanguage, targetLanguage } = req.body;

    const prompt = `Translate ${text} from ${sourceLanguage} to ${targetLanguage}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const ans = response.text();
    res.json({
      ans
    });
});

app.post('/summarize', async (req, res) => {
    const { text } = req.body;

    const prompt = `Summarize ${text}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const ans = response.text();
    res.json({
      ans
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
