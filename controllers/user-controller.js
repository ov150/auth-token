import User from '../models/user-model.js'
import { generateToken } from '../utils/generateToken.js';

const createUserController = async( req, res) =>{
    try {
        const { username, email, password} = req.body;
        const checkUser = await User.findOne({email})
        if(checkUser){
            return res.status(400).json({
                message:"user already exists"
            })
        }
       
        const user = await User.create({
            username,
            email,
            password
        })
        if(user){
            generateToken(user._id, res);
            return res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
            })
        }
    } catch (error) {
        console.log(error);
    }
}


const userLoginController = async(req, res) =>{
    try {
        const { email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                message:"user not found",
            })
        }

        if(password !== user.password){
            return res.json({
                message:"invalid password"
            })
        }
        generateToken(user._id, res);

        return res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
        })

    } catch (error) {
        console.log(error);
    }

}

const getUserController = async (req, res) =>{
    try {
        const user = await User.findById(req.user._id)
        res.json({
            user
        })
    } catch (error) {
        console.log(error);
    }
}

const userLogoutController = async(req, res) =>{
    try {
        res.cookie("jwt", "", {maxAge:0});
        res.json({
            message:"user logout successfully"
        })
    } catch (error) {
        console.log(error);
    }
}
export {
    createUserController,
    userLoginController,
    getUserController,
    userLogoutController
}