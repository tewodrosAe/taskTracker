import express from 'express'

import {signupUser,loginUser} from "../controllers/userControllers.js"
const route = express.Router()

// login
route.post('/login',loginUser)
// signup
route.post('/signup',signupUser)

export default route