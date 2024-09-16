import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>HEALTHCARE LEDGER</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
