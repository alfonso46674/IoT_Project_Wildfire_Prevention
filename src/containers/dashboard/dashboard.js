import React from 'react';
import './dashboard.scss'
import Navbar from '../../components/navbar/navbar';
import Dashboard from '../../components/dashboard/dashboard';
const DashboardContainer  = () => {
  
  return (
    <div>
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default DashboardContainer
