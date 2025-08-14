// mongoose ke through humne data modeling (schmea ) define kiya database i.e mongodb ke liye

import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';



const userSchema = new mongoose.Schema({

username:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim:true,
    index:true,
},

email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim:true,
},
fullname:{
    type: String,
    required: true,
    trim:true,
    index:true,
},

avatar:{
    type: String,
    required:true,
},

coverImage:{
    type:String,
},

watchHistory:[  // for this we need to install "npm i mongoose-aggregate-paginate-v2"
    {
        type:mongoose.Schema.Types.ObjectId,
        ref :"Video"
    }
],

password:{       // we will install bcrypt library : it help you to hash passwords  [npm i bcrypt]
    type: String,
    required:[true, 'Password is required']
},

refreshToken:{    // for this we install jsonwebtoken [npm i jsonwebtoken] which is a bear token (it's like key jo v token dega use data mil jaega)
	type:String     // we will write code for token in env
}


},{timestamps:true})

// for password encryption we'll use pre which is a hook
userSchema.pre("save",async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10)
    next()
})

// we will use isPasswordCorrect in loginfunction in user.controller
userSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password,this.password)
}


//  token ke liye hum login function banenge controoller me
userSchema.methods.generateAccessToken = function(){         //generateAccesToken=short lived
    return jwt.sign({
        _id: this.id,
        email: this.email,
        username:this.username,
        fullname:this.fullname

    },
    process.env.ACCESS_TOKEN_SECRET,{
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userSchema.methods.generateRefreshToken = function (){      // generateRefreshToken= long lived
     return jwt.sign({
        _id: this.id,
        

    },
    process.env.REFRESH_TOKEN_SECRET,{
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User",userSchema)