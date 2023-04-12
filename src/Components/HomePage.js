import React from 'react'
import { useHistory } from "react-router"

const Homepage = () =>{
    const navigate = useHistory()

    const handleClickTasks = () => {
        navigate.push('/tasks')
    }
    const handleClickEmployees = () =>{
        navigate.push('/employees')
    }
    const handleClickOrders = () =>{
        navigate.push('/orders')
    }
    return (
        <div style={{textAlign: 'center', marginTop: '10rem'}}>
      <h1>Employee Management System</h1>
      <button onClick={handleClickTasks}>View All Tasks</button>
      <button onClick={handleClickEmployees}>View All Employees</button>
      <br/>
      <br/>
      <button onClick={handleClickOrders}>View All Orders</button>
    </div>
    )
}
export default Homepage