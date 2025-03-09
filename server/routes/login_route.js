import express from 'express'
import { loginAuth } from '../controller/authController.js'

const router = express.Router()

router.post('/api/auth/login', loginAuth)

export default router
