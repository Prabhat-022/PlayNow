import express from 'express';
import dontenv from 'dotenv';
import databaseConnection from './utils/database.js';
import cors from 'cors'
// internalBinding('errors').triggerUncaughtException() than add file extension eg. .js, .tsx

import cookieParser from 'cookie-parser';
const app = express();
// const port = process.env.PORT || 3000;

import userRoute from './routes/userRoutes.js'

dontenv.config({
    path: '.env'
})


databaseConnection();

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser())

const corsOptions = {
    origin: 'http://localhost:3000',
    //for save the data on browser
    Credentials:true
} 
app.use(cors(corsOptions));

//creating the api
app.use("/api/v1/user", userRoute);
// http://localhost:8000/api/v1/user/register

app.get('/', (req, res) => {
    res.send("Hii, how are you, i'm coming form backend");
})


app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
})
