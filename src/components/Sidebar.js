import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Add styles for Sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <ul>
        <li><Link to="/dashboard">DashBoard</Link></li>
        <li><Link to="/dashboard/profile">Profile</Link></li>
        <li><Link to="/dashboard/settings">Settings</Link></li>
        <li>  <Link to='/'>Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
