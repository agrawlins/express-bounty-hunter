import React, { useState, useEffect } from "react";
import axios from "axios"
import Bounty from "./components/bounty";
import AddBountyForm from "./components/AddBountyForm";


const App = () => {
  const [bounties, setBounties] = useState([])

  const getBounties = () => {
    axios.get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  const addBounty = (newBounty) => {
    axios.post("/bounties", newBounty)
    .then(res => {
      setBounties(prevBounties => [...prevBounties, res.data])
    })
    .catch(err => console.log(err))
  }

  const editBounty = (updates, bountyId) => {
    axios.put(`/bounties/${bountyId}`, updates)
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.log(err))
  }

  const deleteBounty = (bountyId) => {
    axios.delete(`/bounties/${bountyId}`)
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  }

  // const searchBounties = (input, dropdownCategory) => {
        //bounties.find(
            // input && dropdownCategory
        //)
  // }

  useEffect(() => {
    getBounties()
  }, [])
  return (
    <div>
      <h1 className="header">Star Wars: Bounty Hunter</h1>
      <div className="cockpit-HUD">
        <div className="bounty-add">
          <AddBountyForm
            submit={addBounty}
            btnText="Add Bounty"
          />
        </div>
        <div className="bounty-container">
          // <input type="text" placeholder="search"></input>

          {
          bounties.map(bounty => 
            <Bounty
              {...bounty}
              key={bounty.title}
              deleteBounty={deleteBounty}
              editBounty={editBounty}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;