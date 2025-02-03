import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/db.js"
import cors from "cors"
import {app,server} from "./lib/socket.js"
dotenv.config()

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({extended:true,limit:'10mb'}))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    
}))
app.use("/api/auth",authRoutes)
app.use("/api/message", messageRoutes);
server.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`)
    connectDB();
})