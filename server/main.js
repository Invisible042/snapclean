import express from 'express'
import cors from 'cors'
import signup_route from './routes/signup_route.js'
import login_route from './routes/login_route.js'
import connectDb from './config/config.js'


const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use('/', signup_route)
app.use('/',login_route)

connectDb()
app.listen(port, ()=>console.log(`server running on http://localhost:${port}`))