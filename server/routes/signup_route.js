import express from 'express'
import {signupAuth} from '../controller/authController.js'

const router = express.Router()

router.get('/api/auth/signup', signupAuth)

export default router