// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
const express = require('express');
const cors = require("cors");
// const bodyParser=require("body-parser");
const {Configuration, OpenAIApi} = require('openai');

const config = new Configuration({
    apiKey: "sk-proj-4sXohMDLN5kmw8m2pSWPT3BlbkFJk9HtbcJMqROrWGrUhlUH"
})

const openai = new OpenAIApi(config)



console.log("index2.js")