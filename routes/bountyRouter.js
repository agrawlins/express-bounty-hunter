const express = require('express')
const bountyRouter = express.Router()
const {v4: uuid4} = require("uuid")

const bounties = [
    {
        firstName: "Anakin",
        lastName: "Skywalker",
        living: "ALIVE",
        bounty: 150,
        type: "SITH",
        _id: uuid4()
    },
    {
        firstName: "Plo",
        lastName: "Koon",
        living: "DEAD",
        bounty: 100,
        type: "JEDI",
        _id: uuid4()
    },
    {
        firstName: "Jar-Jar",
        lastName: "Binks",
        living: "ALIVE",
        bounty: 50,
        type: "SITH",
        _id: uuid4()
    },
    {
        firstName: "Ahsoka",
        lastName: "Tano",
        living: "ALIVE",
        bounty: 250,
        type: "JEDI",
        _id: uuid4()
    },
    {
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        living: "ALIVE",
        bounty: 500,
        type: "JEDI",
        _id: uuid4()
    }
]

//ROUTES
bountyRouter.get("/", (req, res) => {
        res.send(bounties)
    })

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid4()
    console.log(newBounty)
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the hitlist!`)
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updatedBounty)
})

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`Deleted target from the hitlist`)
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