import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navigbar from './Navigbar';
import Table from './Table';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navigbar/>
      <div className="dashboard-content">
        <Sidebar/>
        <div className="main-content">
        <Table/>
          <Outlet /> {/* Renders child routes */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;