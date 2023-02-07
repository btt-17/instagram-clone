const express = require('express')
const router = express.Router()
const database = require('./database')


router.get('/',(req, res) => {
    res.send('Hello World!')
})

router.post('/api/login', async (req,res) => {
    const dbConnect = database.getDb()

    const data = await dbConnect.collection("user").find({
        name: req.body.username,
        password: req.body.password
    }).toArray()

    if (data.length === 0){
        res.status(200).json({data: "Your username or password is wrong!"})
    } 

    if (data.length !== 0){
        res.status(200).json({data: "successfully"})
    }
})

router.post('/api/signup', async (req,res) => {
    const dbConnect = database.getDb()
    
    const flag = await dbConnect.collection("user").find({
        email: req.body.email,
    }).toArray()

    if (flag.length === 0){
        await dbConnect.collection("user").insertOne({
            name: req.body.username,
            password: req.body.password,
            email: req.body.email,
        })
        res.status(200).json({data: "successfully"})

    } 

    if (flag.length !== 0){
        res.status(200).json({data: "Your email are already used!"})
    }
})

module.exports = router