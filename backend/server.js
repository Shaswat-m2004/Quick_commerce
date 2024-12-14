import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";
import connectDB from "./config/connectDB.js";

dotenv.config()
const app = express()
app.use(cors({
    Credentials : true,
    origin : process.env.FRONTEND_URL
}))

app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy : false
}))

app.get('/',(req,res)=>{
    res.json({
        message:"server is running at 3000"
    })
})

const PORT = 3000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at http://localhost:${PORT}`)
    })
})
