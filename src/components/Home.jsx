import React, { useState } from 'react';
import './Home.css'; // Import Home-specific CSS

function Home() {
  const [showLogin, setShowLogin] = useState(null);

  const handleShowLogin = (type) => {
    setShowLogin(type);
  };

  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to Healthcare Ledger</h1>
        <p>
          This is a platform designed to manage healthcare data efficiently. 
          Here you can find information about patients, doctors, and more.
        </p>
        <div className="home-features">
          <h2>Features</h2>
          <ul>
            <li>Manage patient records</li>
            <li>Track doctor appointments</li>
            <li>View detailed reports</li>
            <li>Secure data handling with blockchain technology</li>
          </ul>
        </div>
        
        <div className="login-options">
          <button onClick={() => handleShowLogin('patient')}>Patient Login</button>
          <button onClick={() => handleShowLogin('doctor')}>Doctor Login</button>
        </div>
        
        {showLogin === 'patient' && (
          <div className="login-container">
            <h2>Patient Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="patient-username">Username</label>
                <input
                  type="text"
                  id="patient-username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="patient-password">Password</label>
                <input
                  type="password"
                  id="patient-password"
                  required
                />
              </div>
              <button type="submit" className="login-btn">Login</button>
            </form>
          </div>
        )}

        {showLogin === 'doctor' && (
          <div className="login-container">
            <h2>Doctor Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="doctor-username">Username</label>
                <input
                  type="text"
                  id="doctor-username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="doctor-password">Password</label>
                <input
                  type="password"
                  id="doctor-password"
                  required
                />
              </div>
              <button type="submit" className="login-btn">Login</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
