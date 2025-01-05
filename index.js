const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const chatbotRoutes = require("./routes/chatbotRoutes");
const chatbotRoutes= require("./routes/chatbotRoutes")

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
    res.status(200).send('Server is running!');
});
app.use("/api", chatbotRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});