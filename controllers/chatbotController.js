
import OpenAI from 'openai';

// Initialize OpenAI client
const client = new OpenAI({
    apiKey: "sk-proj-4sXohMDLN5kmw8m2pSWPT3BlbkFJk9HtbcJMqROrWGrUhlUH",
  });


// Route for Chat API
const handleChat = async (req, res) => {
    try {
      const { message } = req.body;
       console.log("/api/chat-message >>",message)
  
      if (!message) {
        return res.status(400).json({ success: false, message: 'Message is required' });
      }
  
      // OpenAI Chat Completion
      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: message }],
        model: 'gpt-3.5-turbo', // Use 'gpt-4' if your API key supports it
      });
      
      console.log("chatCompletion ####>>",chatCompletion)
  
      const reply = chatCompletion.choices[0].message.content;
      
  
      console.log("reply $$$>>>",reply)
      console.log("chatCompletion.choices[0]",chatCompletion.choices[0])
  
      // Respond with AI's reply
      res.status(200).json({ success: true, reply });
    } catch (error) {
      console.error('Error in OpenAI API:', error);
      res.status(500).json({ success: false, message: 'Error communicating with OpenAI' });
    }
  };
  
export {handleChat}
















// const configOpenAI = require("../config/connection");

// const handleChat = async (req, res) => {
//     try {
//         const { message } = req.body;
//         console.log("message from postman in req.body >> ",message)
//         const openai = configOpenAI();

//         const response = await openai.createCompletion({
//             model: "gpt-3.5-turbo",
//             messages: [{ role: "user", content: message }],
//         });

//        let result = response.data.choices[0].message.content 
//        console.log("response in of ai $$>>",response) 
//        console.log("result retured by ai ##>>",result) 

//         res.status(200).json({
//             success: true,
//             // reply: response.data.choices[0].message.content,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Error communicating with OpenAI",
//         });
//     }
// };

// module.exports = { handleChat };
