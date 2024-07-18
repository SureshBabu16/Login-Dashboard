import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Overview from './Overview';
import Sales from './Sales';
import Orders from './Orders';
import Visitors from './Visitors';
import './DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Hughes</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="overview">Overview</Link></li>
            <li><Link to="sales">Sales</Link></li>
            <li><Link to="orders">Orders</Link></li>
            <li><Link to="visitors">Visitors</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <div className="search">
            <input type="text" placeholder="Search projects" />
          </div>
          <div className="user-info">
            <img src="https://via.placeholder.com/40" alt="User" />
            <span>Login Name</span>
          </div>
        </header>
        <section className="dashboard-content">
          <Routes>
            <Route path="overview" element={<Overview />} />
            <Route path="sales" element={<Sales />} />
            <Route path="orders" element={<Orders />} />
            <Route path="visitors" element={<Visitors />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
