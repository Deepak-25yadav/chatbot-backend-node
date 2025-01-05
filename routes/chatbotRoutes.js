import { handleChat } from "../controllers/chatbotController.js";
import express from 'express'
// const express = require("express");
// const { handleChat } = require("../controllers/chatbotController");
const chatBotRouter = express.Router();

chatBotRouter.post("/chat", handleChat);

export {chatBotRouter}