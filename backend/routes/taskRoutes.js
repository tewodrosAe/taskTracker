import express from 'express'
import { createTask, getTask, deleteTask, updateTask} from '../controllers/taskControllers.js'
import requireUser from '../middleware/requireUser.js'

const route = express.Router()

route.use(requireUser)
// post tasks to server
route.post('/', createTask)

// get tasks to server
route.get('/', getTask)

// update tasks
route.patch('/:id',updateTask)

// delete tasks
route.delete('/:id',deleteTask)

export default route