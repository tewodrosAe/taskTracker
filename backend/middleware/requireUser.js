import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'


const requireUser = async (req,res,next) => {
    const { authorization } = req.headers

    if(!authorization) {
        res.status(401).json({error:"Access Denied"})
    }
    const token = authorization.split(" ")[1]
    
    try{
        const {_id} = jwt.verify(token,process.env.SECRET)
        req.user =  await User.findOne({_id}).select('_id')
        next()
    }catch(error){
        console.log(error)
        res.status(401).json({error:"Authorization denied"})
    }
}

export default requireUser