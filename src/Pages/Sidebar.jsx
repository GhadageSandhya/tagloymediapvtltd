import React, { useState } from 'react';
import { FaImages, FaCheckSquare, FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Sidebar({ children }) {

  // This state for open or close toggle bar
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open)
  }

  //Here access the routes of imagecompnent & checkboxcomponent
  const menuItem = [
    {
      path: "/images",
      name: "Images",
      icon: <FaImages />
    },
    {
      path: "/checkboxes",
      name: "Checkboxes",
      icon: <FaCheckSquare />
    }
  ]

  return (
    <div className='container-fluid'>
      <div style={{ width: open ? "250px" : "50px" }} className="sidebar">
        <div className="top_action">
          <h1 style={{ display: open ? "block" : "none" }} className='logo'>Dashboard</h1>
          <div style={{ marginLeft: open ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item, index) => {
            return <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div style={{ display: open ? "block" : "none" }} className="link_text">{item.name}</div>
            </NavLink>
          })
        }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar