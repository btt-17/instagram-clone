const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 3000
const router = require('./routes')
const cors = require('cors');
const database = require('./database')

database.connectToServer()

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
    app.use(cors())
    app.use(express.json())

    app.use('/', router)
  
})