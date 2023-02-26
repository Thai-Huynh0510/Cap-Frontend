import React from 'react'
import { useHistory } from "react-router"

const Homepage = () =>{
    const navigate = useHistory()

    const handleClickTasks = () => {
        console.log("click tasks")
        navigate.push('/tasks')
    }
    const handleClickEmployees = () =>{
        console.log('click employees')
        navigate.push('/employees')
    }

    return (
        <div style={{textAlign: 'center', marginTop: '10rem'}}>
      <h1>Employee Management System</h1>
      <button onClick={handleClickTasks}>View All Tasks</button>
      <button onClick={handleClickEmployees}>View All Employees</button>
    </div>
    )
}
export default HomePage