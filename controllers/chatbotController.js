
import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();


const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });



const handleChat = async (req, res) => {
    try {
      const { message } = req.body;
    //    console.log("/api/chat-message >>",message)
  
      if (!message) {
        return res.status(400).json({ success: false, message: 'Message is required' });
      }
  
      
      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: message }],
        model: 'gpt-3.5-turbo',
      });
      
    //   console.log("chatCompletion ####>>",chatCompletion)
  
      const reply = chatCompletion.choices[0].message.content;
      
  
    //   console.log("reply $$$>>>",reply)
    //   console.log("chatCompletion.choices[0]",chatCompletion.choices[0])
  
      
      res.status(200).json({ success: true, reply });
    } catch (error) {
      console.error('Error in OpenAI API:', error);
      res.status(500).json({ success: false, message: 'Error communicating with OpenAI' });
    }
  };
  
export {handleChat}

