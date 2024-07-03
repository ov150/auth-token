import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv";
configDotenv();

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please add username"],
        unique: [true, "Please add uniqu username"]
    },
    email:{
        type:String,
        required:[true, "Please add email Id"],
        unique:[true, "Please add correct email address"]
    },
    password:{
        type:String,
        required:[true, "Please add password"]
    }
},{timestamps:true});


// userSchema.methods.generateToken = function (){
//     return jwt.sign({id : this._id}, "underscore", {
//         expiresIn: '1d',
//     })
// }

const User = mongoose.model("User", userSchema)

export default User