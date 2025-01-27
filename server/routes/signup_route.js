import express from 'express'
import {signupAuth} from '../controller/authController.js'

const router = express.Router()

router.post('/api/auth/signup', signupAuth)

export default router