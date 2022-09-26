const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')

//POST ONE
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

//GET ALL
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//GET ONE
bountyRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(!foundBounty){
        const error = new Error(`'${bountyId}' was not found`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})

//GET BY TYPE
bountyRouter.get("/search/type", (req, res, next) => {
    Bounty.find({type: req.query.type}, (err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//PUT ONE
bountyRouter.put("/:bountyId", (req, res) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new: true},
        (err, updatedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`${updatedBounty}`)
    })
})

//DELETE ONE
bountyRouter.delete("/:bountyId", (req, res) => {
    Bounty.findOneAndDelete(
        {_id: req.params.bountyId},
        (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully Deleted ${deletedItem.title} from the Database!`)
    })
})

// //OLD DATA
// const bounties = [
//     {
//         firstName: "Anakin",
//         lastName: "Skywalker",
//         living: "ALIVE",
//         bounty: 150,
//         type: "SITH",
//         _id: uuid4()
//     },
//     {
//         firstName: "Plo",
//         lastName: "Koon",
//         living: "DEAD",
//         bounty: 100,
//         type: "JEDI",
//         _id: uuid4()
//     },
//     {
//         firstName: "Jar-Jar",
//         lastName: "Binks",
//         living: "ALIVE",
//         bounty: 50,
//         type: "SITH",
//         _id: uuid4()
//     },
//     {
//         firstName: "Ahsoka",
//         lastName: "Tano",
//         living: "ALIVE",
//         bounty: 250,
//         type: "JEDI",
//         _id: uuid4()
//     },
//     {
//         firstName: "Obi-Wan",
//         lastName: "Kenobi",
//         living: "ALIVE",
//         bounty: 500,
//         type: "JEDI",
//         _id: uuid4()
//     }
// ]

// //OLD ROUTES
// bountyRouter.get("/", (req, res) => {
//         res.send(bounties)
//     })

// bountyRouter.post("/", (req, res) => {
//     const newBounty = req.body
//     newBounty._id = uuid4()
//     console.log(newBounty)
//     bounties.push(newBounty)
//     res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the hitlist!`)
// })

// bountyRouter.put("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const updateObject = req.body
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
//     res.send(updatedBounty)
// })

// bountyRouter.delete("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     bounties.splice(bountyIndex, 1)
//     res.send(`Deleted target from the hitlist`)
// })

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