const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

//Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

//Connect to Database
mongoose.connect(
    process.env.DATABASE_URL,
    () => console.log("Connected to the Database")
)

//ROUTES
app.use("/bounties", require("./routes/bountyRouter.js"))

//Error Handler
app.use((err, req,res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

//Listener
app.listen(4000, () => {
    console.log("The Server is running on Port 4000")
})