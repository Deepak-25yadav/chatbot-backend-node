import { handleChat } from "../controllers/chatbotController.js";
import express from 'express';

const chatBotRouter = express.Router();

chatBotRouter.post("/chat", handleChat);

export {chatBotRouter}