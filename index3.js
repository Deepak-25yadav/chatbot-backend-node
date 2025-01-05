import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { chatBotRouter } from './routes/chatbotRoutes.js';
// import OpenAI from 'openai';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;



// Middleware
app.use(cors());
app.use(express.json());




// // Route for Chat API
// app.post('/api/chat', async (req, res) => {
//   try {
//     const { message } = req.body;
//      console.log("/api/chat-message >>",message)

//     if (!message) {
//       return res.status(400).json({ success: false, message: 'Message is required' });
//     }

//     // OpenAI Chat Completion
//     const chatCompletion = await client.chat.completions.create({
//       messages: [{ role: 'user', content: message }],
//       model: 'gpt-3.5-turbo', // Use 'gpt-4' if your API key supports it
//     });
    
//     console.log("chatCompletion ####>>",chatCompletion)

//     const reply = chatCompletion.choices[0].message.content;
    

//     console.log("reply $$$>>>",reply)
//     console.log("chatCompletion.choices[0]",chatCompletion.choices[0])

//     // Respond with AI's reply
//     res.status(200).json({ success: true, reply });
//   } catch (error) {
//     console.error('Error in OpenAI API:', error);
//     res.status(500).json({ success: false, message: 'Error communicating with OpenAI' });
//   }
// });




app.use("/api", chatBotRouter);

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).send('Server is running!');
});


// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
