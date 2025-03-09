import express from 'express'
import {removeBgAuth} from '../controller/authController.js'
import multer from 'multer'

const router = express.Router()
const upload = multer({dest:'uploads/'})

router.post('/removeBg',upload.single('file'), removeBgAuth)

export default router