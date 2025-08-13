import { asyncHandler } from "../utils/asyncHandler.js";



// ab registerUser jo ki controller me define hai, wo function ek response bhejega.
// to check whetehr response i.e api response is wroking or not: search thunder client(vsCode plugin) or postman (we'll down download postman)
//  search this on postman http://localhost:8000/users/register 

const registerUser = asyncHandler(async (req,res)=>{
    res.status(200).json({
        message:"You Suck"
    })
})


export {
    registerUser,
}



// after cloudinary setup move to controller 
// from controller move to router