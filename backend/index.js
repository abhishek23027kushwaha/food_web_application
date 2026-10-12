import express from "express"
import dotenv from "dotenv"
dotenv.config()

// ✅ Global Variables - Poore backend mein accessible
global.user = "abhishek23027kushwaha"
global.email = "abhishek8888raj@gmail.com"

import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import userRouter from "./routes/user.routes.js"

import itemRouter from "./routes/item.routes.js"
import shopRouter from "./routes/shop.routes.js"
import orderRouter from "./routes/order.routes.js"
import http from "http"
import { Server } from "socket.io"
import { socketHandler } from "./socket.js"

const app=express()
const server=http.createServer(app)

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL
].filter(Boolean)

const corsOptions = {
  origin: (origin, callback) => {
    // Allow any origin that matches allowed list, vercel, or localhost in dev
    if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".vercel.app") || origin.includes("localhost")) {
      callback(null, true)
    } else {
      callback(null, true)
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}

const io = new Server(server, {
  cors: corsOptions
})

app.set("io", io)

const port = process.env.PORT || 5000
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/shop",shopRouter)
app.use("/api/item",itemRouter)
app.use("/api/order",orderRouter)

socketHandler(io)
server.listen(port,()=>{
    connectDb()
    console.log(`server started at ${port}`)
})

