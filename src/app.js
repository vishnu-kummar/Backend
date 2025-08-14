import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

app.use(cookieParser())   // apne server se user ke browser ka cookie acces kr pau aslo set user cookies



// routes
import userRouter from './routes/user.routes.js'
//routes declaration
app.use("/api/v1/users",userRouter) // let say koi user "/users" type krta hai toh hum use controll denge userRouter ka (user.routes.js)

export {app}

// Workflow here:

// Create the Express app.
// Set middlewares for parsing JSON, handling CORS, reading cookies.
// Tell Express that all routes starting with /api/v1/users will be handled by user.routes.js.

// middleare: let say hamrae pass koi request/url aaya aur kya hum us response ko bhejne se pehle check krna chahte hau ki user capable hai ki nhi, jaise:
// user logged in hai ki nhi uske baad hi response milega . toh kuch na kuch buch me check krna pdta hai use bich ki checking ko middleware bolte hai.