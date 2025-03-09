import express from 'express'
import cors from 'cors'
import signup_route from './routes/signup_route.js'
import login_route from './routes/login_route.js'
import removeBg_route from './routes/removeBg_route.js'
import connectDb from './config/config.js'



const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use('/', signup_route)
app.use('/',login_route)
app.use('/',removeBg_route)

connectDb().then(()=>{
    app.listen(port, ()=>console.log(`server running on http://localhost:${port}`))
}).catch((error)=>{
    console.log("could not connect to database")
})