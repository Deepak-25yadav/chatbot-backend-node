import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { chatBotRouter } from './routes/chatbotRoutes.js';


dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());




app.get('/health', (req, res) => {
  res.status(200).send('Server is running!');
});



app.use("/api", chatBotRouter);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
