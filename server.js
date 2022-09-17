const express = require("express")
const app = express()
const morgan = require("morgan")

//req = request, res = response

//Middleware
app.use(express.json()) //Looks for a request body, and turns it into 'req.body'
app.use(morgan('dev'))


//ROUTES
app.use("/bounties", require("./routes/bountyRouter.js"))

app.listen(4000, () => {
    console.log("The server is running on Port 4000")
})
