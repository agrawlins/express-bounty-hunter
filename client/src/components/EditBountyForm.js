import React, { useState} from "react";

const AddBountyForm = (props) => {
    const {firstName, lastName, living, bounty, type, submit, btnText, _id} = props
    const initInputs = {firstName: firstName || "", lastName: lastName || "", living: living || "", bounty: bounty || "", type: type || ""}
    const [inputs, setInputs] = useState(initInputs)
    const [alive, setAlive] = useState(inputs.living)
    const [forceType, setForceType] = useState(inputs.type)

    //

    const toggleLiving = (e) => {
        handleChange(e)
        setAlive(prevLife => prevLife === "ALIVE" ? "DEAD" : "ALIVE")
    }

    const toggleForceType = (e) => {
        handleChange(e)
        setForceType(prevForce => prevForce === "JEDI" ? "SITH" : "JEDI")
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(inputs, _id)
        setInputs(initInputs)
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>First Name</label>
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label>Last Name</label>
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <label>Bounty</label>
            <input
                type="number"
                min={0}
                name="bounty"
                value={inputs.bounty}
                onChange={handleChange}
                required
            />
        </div>
        <h4 className="warning">PLEASE USE THE OPPOSITE<br/>OF WHAT YOU INTEND<br/> FOR THESE BUTTONS </h4>
        <div>
            <label>DEAD/ALIVE </label>
            <input
                className={`${alive}-btn`}
                type="button"
                name="living"
                value={alive}
                onClick={toggleLiving}
            />
        </div>
        <div>
            <label>JEDI/SITH </label>
            <input
                className={`${forceType}-btn`}
                type="button"
                name="type"
                value={forceType}
                onClick={toggleForceType}
            />
        </div>
        <button>{btnText}</button>
    </form>
  );
}

export default AddBountyForm;