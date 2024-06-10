import express from 'express';
import cookieParser from "cookie-parser";

import "./configs/dotenvConfig.js"
import corsConfig from './configs/corsConfig.js';

import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import conversationRoute from "./routes/conversationRoute.js"

import connectToMongoDB from './services/connectToMongoDB.js';

const app = express();

const PORT = process.env.PORT || 8080;

app.use(corsConfig);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute)
app.use("/api/v1/message", messageRoute)
app.use("/api/v1/conversation", conversationRoute)

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`);
})