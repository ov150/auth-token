import User from "../models/user-model.js"
import jwt from "jsonwebtoken"

const verify = async (req, res, next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.json({
                message:"unauthorized token"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.json({
                message: "invalid token"
            })
        }
        const user = await User.findById(decoded.userId);

        if(!user){
            return res.json({
                message:"user not found"
            })
        }
        req.user = user;
        next()
    } catch (error) {
        console.log(error);
    }
}

export default verify;