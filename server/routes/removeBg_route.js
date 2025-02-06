import express from 'express'
import {removeBgAuth} from '../controller/authController.js'

const router = express.Router()

router.post('/removeBg', removeBgAuth)

export default router