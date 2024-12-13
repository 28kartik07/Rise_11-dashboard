import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Jur</h2>
      </div>
      <nav className="nav-menu">
        <a href="#" className="nav-item active">
          <span className="icon">📊</span>
          Dashboard
        </a>
        <a href="#" className="nav-item">
          <span className="icon">📁</span>
          My Cases
        </a>
        <a href="#" className="nav-item">
          <span className="icon">📈</span>
          Activities
        </a>
        <a href="#" className="nav-item">
          <span className="icon">📅</span>
          Calendar
        </a>
        <a href="#" className="nav-item">
          <span className="icon">📄</span>
          Files
        </a>
        <a href="#" className="nav-item">
          <span className="icon">⚖️</span>
          Open a Dispute
        </a>
      </nav>
      <div className="sidebar-banner">
        <h3>Get Justice on every Claims</h3>
        <div className="banner-image"></div>
      </div>
    </div>
  );
}

export default Sidebar;