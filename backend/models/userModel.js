import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt"

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        unique:true,
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
})

userSchema.statics.signup = async function (username,email,password) {
    if(!email || !username || !password){
        throw Error("Fields must not be empty")
    }
    if(!validator.isEmail(email) || !validator.isStrongPassword(password)){
        throw Error("incorrect email or password type")
    }
    const exist = await this.findOne({email})
    if(exist){
        throw Error("Email already exists")
    }
    const salt = await bcrypt.genSalt(11)

    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({username,email,password:hash})

    return user
}

userSchema.statics.login = async function (email,password){
    if(!email || !password){
        throw Error("Fields must not be empty")
    }
    if(!validator.isEmail(email)){
        throw Error("Not a valid email address")
    }
    
    const user = await this.findOne({email})

    if(!user){
        throw Error("User doesnt exist")
    }

    const valid = await bcrypt.compare(password,user.password)

    if(!valid){
        throw Error("Incorrect Password or Email")
    }

    return user
}

export default mongoose.model('userass',userSchema)