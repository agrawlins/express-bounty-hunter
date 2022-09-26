const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const DATABASE_URL = require('dotenv')

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Connect to Database
mongoose.connect(
    "mongodb+srv://MerrimanLyon:13qeadzc%21%23QEADZC@cluster0.xqosq.mongodb.net/bountyhunterdb?retryWrites=true&w=majority",
    () => console.log("Connected to the Database")
)

//ROUTES
app.use("/bounties", require("./routes/bountyRouter.js"))

//Error Handler
app.use((err, req,res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Listener
app.listen(4000, () => {
    console.log("The Server is running on Port 4000")
})