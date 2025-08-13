// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import {app} from './app.js'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})







connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
console.log("MONGO DB CONNECTION FAILED!!",err);

})





















/*  

--> below code is OUR FIRST APPROACH : USING TRY-CATCH & ASYNC AWIAT.
--> NOTE: WE CAN SIMPLY CONNECT WITH DB [mongoose.connect-your_url] but better approach given below;
--> SECOND APPROACH : write all code in any other folder (here we use db folder) and export this function in main folder like index.js  


import express from 'express';
const app =express()

;(async () => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERRR: ",error);
        throw error
        
       })

app.listen(process.env.PORT, ()=>{
    console.log(`App is listeninng on port ${process.env.PORT}`);
    
})

    }catch(error){
            console.error("ERROR: ",error)
            throw err
            
    }
}) ()

*/