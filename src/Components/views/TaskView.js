import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { RiEdit2Line } from 'react-icons/ri';
const TaskView = ({ task }) => {
  const navigate = useHistory()

  const clickEdit = () => {
    navigate.push(`/edittask/${task.id}`)
  }
  return (
    <div>
      <NavBar />
      <div className="single-task">
        <div className="header">
          <h1 style={{ textAlign: 'center' }}>Task view</h1>
          <div className="notice">
          </div>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Description</th>
                <th>Due Date </th>
                <th>Status</th>
                <th>Assigned</th>
                <th>Comments</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>{task.description}</td>
                <td><div className="center">
                  {task.due_date}
                  </div></td>
                <td><div className="center">
                  {task.completion_status}</div></td>
                {task.employeeId !== null
                  ? <td><div className="center">
                    <Link className="link" to={`/employees/${task.employee.id}`}>
                      {task.employee.first_name + " " + task.employee.last_name}</Link></div>
                  </td>
                  : <td>Unassigned</td>
                }
                <td>{task.comments}</td>
                <td>
                            <button
                              onClick={clickEdit}
                              style={{ 
                                backgroundColor: '#0818A8', 
                                width: '3rem', 
                                padding: '3px', 
                                borderRadius: '5px'}}>
                                <RiEdit2Line size={20} />
                            </button>
                          </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="single-order">
        <h1 style={{ textAlign: 'center' }}>Order</h1>
        <table>
          <tbody>
            <tr>
              <th>Detail</th>
              <th>Request</th>
              <th>Due Date</th>
              <th>Customer</th>
              <th>Actions</th>
            </tr>
            {Array.isArray(task.orders)
  ? task.orders.map(order => {
              return (
                <tr key={order.orderId}>

                  <td>
                      {order.detail} 
                  </td>
                  <td><div className="center">
                    {order.request}</div></td>
                  <td><div className="center">
                    {order.order_due_date}</div></td>
                  <td>{order.customer}</td>
                  <td>
                    <button 
                      style={{ 
                        backgroundColor: '#0818A8', 
                        width: '3rem', 
                        padding: '3px', 
                        borderRadius: '5px'}}>
                        <RiEdit2Line size={20} />
                    </button>
                  </td>
                </tr>
              )
            }): <p>No orders found.</p>}
            

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TaskView