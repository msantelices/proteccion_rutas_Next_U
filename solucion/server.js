import express from 'express' 
import jwt from 'jsonwebtoken'
import cors from 'cors'//
import db from './db.js'

const app = express()

const SECRET = "6NSX0zmBmRJDZAWbMmMB"

app.use(express.json())
app.use(cors())//

app.get('/', (req, res)=> {
    res.json({ status: 'OK' })
})

app.post('/login', (req, res)=> {
    const username = req.body.username
    const password = req.body.password

    if(!username) {
        return res.status(400).json({ success: false, message: 'User is required' })
    }

    if(!password) {
        return res.status(400).json({ success: false, message: 'Password is required' })
    } 


    const user = db.users.find((item)=> item.username === username)

    if(user) {    
        if(user.password === password) {
            const token = jwt.sign({ username }, SECRET)
            return res.status(200).json({ success: true, token })
        } else {
            return res.status(401).json({ success: false, message: 'Incorrect password' })
        }

    } else {
        return res.status(401).json({ success: false, message: 'User not found' })
    }
})


const PORT = process.env.PORT || 8080
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`) )