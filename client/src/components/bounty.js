import React, { useState } from "react";
import EditBountyForm from "./EditBountyForm";

const Bounty = (props) => {
    const {firstName, lastName, living, bounty, type, editBounty, deleteBounty, _id} = props
    const [editToggle, setEditToggle] = useState(false)

  return (
    <div className="bounty">
        { !editToggle ? 
        <>
            <h1>${bounty}</h1>
            <h2>{firstName} {lastName}</h2>
            <h3>{type}</h3>
            <h4>{living}</h4> 
            <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteBounty(_id)}>DELETE</button>
        </>
        :
        <>   
            <EditBountyForm
                firstName={firstName}
                lastName={lastName}
                living={living}
                bounty={bounty}
                type={type}
                _id={_id}
                btnText="Save"
                submit={editBounty}
            />
            <button className="delete-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
        </>
        }
    </div>
  );
}

export default Bounty;