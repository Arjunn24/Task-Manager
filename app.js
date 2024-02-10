const express = require('express')
const app = express()
const tasks=require("./routes/tasks")
const createcustomerror =require('../errors/customerrors')
const connectdb=require('./db/connect')
require('dotenv').config()
const notfound = require('./middleware/not found')
const errorhandlermiddleware= require('./middleware/errorhandler')
//middleware
app.use(express.static('./public'))
app.use(express.json())
//routes
app.use(notfound)
app.use(errorhandlermiddleware)
app.use('/api/v1/tasks',tasks)

const port =3000;

const start = async()=>{
    try{
    await connectdb(process.env.MONGO_URI)
    app.listen(port,()=>{console.log(`tune in to port ${port} `)})
    }catch(error){
   console.log(error)
    }
}

start()
