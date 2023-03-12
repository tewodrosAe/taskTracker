import Task from '../models/taskModel.js' 
import mongoose from 'mongoose'

// post task 
const createTask = async(req,res) => {
    const {title,day,time,description,urgency,type} = req.body
    const {_id} = req.user 
    try{
        const task = await Task.create({title,day,time,description,urgency,type,user_id:_id})
        res.status(200).json(task)
    }catch(error){
        res.status(400).json({error})
    }
}

// get task
const getTask = async (req,res) => {
     const user_id = req.user._id
     const task = await Task.find({user_id}).sort({createdAt:-1})
     res.status(200).json(task)
    }

// update task
const updateTask = async(req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(500).json({error:'invalid id'})
    }
    const task = await Task.findOneAndUpdate({_id:id},{...req.body})
    if(!task){
        return res.status(404).json({error:'task not found'})
    }
    res.status(200).json(task)
}

// Delete task
const deleteTask = async (req,res) =>{
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(500).json({error:'wrong id'})
    }
    const task = await Task.findOneAndDelete({_id:id})
    if(!task){
        return res.status(500).json({error:'no task found'}) 
    }
    res.status(200).json(task)
}


export {
    createTask,
    getTask,
    deleteTask,
    updateTask
}