import React from "react"
import NavBar from "../NavBar";
import {BsPersonFillAdd} from "react-icons/bs";

const NewEmployeeView = (props) => {

  const { handleChange, handleSubmit } = props

  return (
    <div>
      <NavBar />
      <div className="edit-wrapper">
        <h1>Add New Employee</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div className="input-wrapper">
              <label className="edit-form-label">First Name: </label>
              <input 
              type="text" 
              name="first_name" 
              required
              minLength={2}
              maxLength={30}
              onChange={(e) => handleChange(e)} />
            </div>

            <br />

            <div className="input-wrapper">
              <label className="edit-form-label">Last Name: </label>
              <input 
              type="text" 
              name="last_name" 
              required
              minLength={2}
              maxLength={30}
              onChange={(e) => handleChange(e)} />
            </div>

            <br />


            <div className="input-wrapper">
              <label className="edit-form-label">Department: </label>
              <input 
              type="text" 
              name="department" 
              required='required'
              minLength={5}
              maxLength={40}
              onChange={(e) => handleChange(e)} />
            </div>

            <br />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button type="submit">
                Add {" "}
              <BsPersonFillAdd/>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewEmployeeView