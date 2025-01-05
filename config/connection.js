const { Configuration, OpenAIApi } = require("openai");


console.log("Initializing OpenAI Configuration...");
const configOpenAI = () => {
    console.log("debugger reached in function of configOpenAI")
    const configuration = new Configuration({
        // apiKey: process.env.OPENAI_API_KEY,
        apiKey: "sk-proj-4sXohMDLN5kmw8m2pSWPT3BlbkFJk9HtbcJMqROrWGrUhlUH",
    });
    console.log("before return configOpenAI API")
    return new OpenAIApi(configuration);
};
console.log("Configuration initialized successfully.");
module.exports = configOpenAI;
