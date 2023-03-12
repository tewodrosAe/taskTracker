import User from "../models/userModel.js"
import jwt from "jsonwebtoken"

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET, { expiresIn:'3d' })
}

const signupUser = async (req,res) => {
    const {username,email,password} = req.body
    try{
        const user = await User.signup(username,email,password)
        const token = createToken(user._id)
        res.status(200).json({token,username})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

const loginUser = async(req,res) => {
    const {email,password} = req.body

    try{
        const user = await User.login(email,password)
        const username = user.username
        const token =createToken(user._id)
        res.status(200).json({username,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


export {loginUser,signupUser}