import mongoose from "mongoose";

const Schema = mongoose.Schema

const taskSchema = new Schema ({
    title:{
        type:String,
        required:true
    },
    day:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    urgency:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
},{timestamps:true})


export default mongoose.model('task',taskSchema)