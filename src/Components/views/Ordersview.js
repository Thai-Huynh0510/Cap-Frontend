import { Link } from "react-router-dom";
import { RiDeleteBin2Line } from 'react-icons/ri';
import NavBar from "../NavBar";
const OrdersView = ({ orders, deleteOrder }) => {

    return (
      <div>
        <NavBar />
        <div className="all-tasks">
          <div className="header">
            <h1>Manage Orders</h1>
            <div className="notice">
            </div>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Detail</th>
                  <th>Request</th>
                  <th>Customer</th>
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
                {orders.map(order => {
                  return (
                    <tr key={order.id}>
                      <td>
                        <div className="center">
                        {order.id}
                        </div>
                      </td>  
                      <td>
                        {order.detail}
                      </td>
                      <td><div className="center">
                        {order.request}
                        </div></td>
                      <td><div className="center">
                        {order.customer} </div></td>
                      <td>{order.order_due_date}</td>
                      <td>
                        <div className="action-button-wrap">
                          <button
                            onClick={() => deleteOrder(order.id)}
                            className="delete-button"
                          >
                            <RiDeleteBin2Line size={20} />
                          </button>
                        </div>
                      
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
  
        <div className="buttons-wrap">
          <Link to={`/newOrder`}>
            <button>
              Add New Order
            </button>
          </Link>
        </div>
      </div>
    )
  }
  
  export default OrdersView