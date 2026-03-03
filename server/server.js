import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import {connectDB} from './config/db.js';
import auth_Router from './routes/auth_route.js'
import profile_Router from './routes/profile_route.js'


dotenv.config();

connectDB();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin : "http://localhost:3000",
    credentials: true
}));

app.use("/api/auth",auth_Router);
app.use("/api/profile" , profile_Router);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
});