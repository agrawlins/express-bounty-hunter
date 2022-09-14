const express = require("express")
const app = express()

//req = request, res = response

//Middleware
app.use(express.json()) //Looks for a request body, and turns it into 'req.body'

//ROUTES
app.use("/bounties", require("./routes/bountyRouter.js"))

app.listen(3000, () => {
    console.log("The server is running on Port 3000")
})