import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-wrap">
      <nav>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/tasks">View Tasks</Link>
          </li>
          <li>
            <Link to="/employees">View Employees</Link>
          </li>
          <li>
            <Link to="/orders">View Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar