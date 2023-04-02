import React from "react";

const NewTaskView = (props) => {
    const { handleChange, handleSubmit } = props
  
    return (
      <div>
        <div className="edit-wrapper">
          <h1>Add New Task</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <div className="input-wrapper">
                <label className="edit-form-label">Description: </label>
                <input
                  type="text"
                  name="description"
                  required
                  minLength={5}
                  maxLength={30}
                  onChange={(e) => handleChange(e)} />
              </div>
              <br />
              <div className="input-wrapper">
                <label className="edit-form-label">Completion Status: </label>
                <input
                  type="text"
                  name="completion_status"
                  required
                  minLength={5}
                  maxLength={20}
                  onChange={(e) => handleChange(e)} />
              </div>
              <br/>
              <div className="input-wrapper">
                <label className="edit-form-label">Due date: </label>
                <input
                  type="text"
                  name="due_date"
                  required="required"
                  minLength={3}
                  maxLength={20}
                  onChange={(e) => handleChange(e)} />
              </div>
              <br />

              <div className="input-wrapper">
                <label className="edit-form-label">Comments: </label>
                <input
                  type="text"
                  name="comments"
                  required="required"
                  minLength={3}
                  maxLength={20}
                  onChange={(e) => handleChange(e)} />
              </div>
              <br/>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button type="submit">
                  Submit
                </button>
              </div>
  
            </div>
          </form>
        </div>
      </div>
    )
  }
  
  export default NewTaskView