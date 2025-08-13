import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

const router = Router()

// let say koi user "/api/v1/users/register" type krta hai toh hum use controll denge userRouter ka (user.routes.js): jise below code handle krega
// '/users' hit hote hi '/register' hit hoga , register ke through registerUser (jo ki user.controller.js me define hai) call hua
// ab registerUser jo ki controller me define hai, wo function, ek response bhejega.
// to check whetehr response i.e api response is wroking or not: search thunder client(vsCode plugin) or postman (we'll down download postman)
//  search this on postman http://localhost:8000/users/register 
router.route("/register").post(registerUser)

export default router

// now call this router in app.js