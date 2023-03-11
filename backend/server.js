import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

// import routes
import taskRoutes from './routes/taskRoutes.js'
import userRoutes from './routes/userRoutes.js'

// initialize express app
const app = express()

// configuring .env
dotenv.config()
const port = process.env.PORT 
const uri = process.env.MONGODB_URI

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/api/v1/task',taskRoutes)
app.use('/api/v1/user',userRoutes)

// connect
mongoose.connect(uri)
.then(() => {
    app.listen(port, () => console.log(`listening on port ${port}`))
})
.catch(error => console.log(error))