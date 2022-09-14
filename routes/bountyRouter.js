const express = require('express')
const bountyRouter = express.Router()
const {v4: uuid4} = require("uuid")

const bounties = [
    {
        firstName: "Anakin",
        lastName: "Skywalker",
        living: true,
        bounty: 150,
        type: "sith",
        _id: uuid4()
    },
    {
        firstName: "Plo",
        lastName: "Koon",
        living: false,
        bounty: 100,
        type: "jedi",
        _id: uuid4()
    },
    {
        firstName: "Jar-Jar",
        lastName: "Binks",
        living: true,
        bounty: 50,
        type: "sith",
        _id: uuid4()
    },
    {
        firstName: "Ahsoka",
        lastName: "Tano",
        living: true,
        bounty: 250,
        type: "jedi",
        _id: uuid4()
    },
    {
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        living: true,
        bounty: 500,
        type: "jedi",
        _id: uuid4()
    }
]

//ROUTES
bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid4()
        console.log(newBounty)
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the hitlist!`)
    })

//GET

// bountyRouter.get((req, res) => {
//     res.send(bounties)
// })

//POST

// bountyRouter.post((req, res) => {
//     const newBounty = req.body
//     newBounty._id = uuid4()
//     console.log(newBounty)
//     bounties.push(newBounty)
//     res.send(`Successfully added ${newBounty.title} to the database!`)
// })

//PUT



//DELETE

module.exports = bountyRouter