// src/components/Patients.jsx
import React from 'react';
import './Patients.css'; // Import the Patients-specific CSS

function Patients() {
  return (
    <div className="patients-page">
      <div className="patients-content">
        <h1>Your Patient Dashboard</h1>
        <p>
          Welcome to your personal dashboard. Here you can manage your health records, 
          view your medical history, and keep track of upcoming appointments.
        </p>
        <div className="patients-info">
          <h2>Patient Information</h2>
          <ul>
            <li>Patient ID: 12345</li>
            <li>Name: John Doe</li>
            <li>Age: 45</li>
            <li>Gender: Male</li>
            <li>Address: 123 Main St, Anytown, USA</li>
          </ul>
        </div>
        <div className="patients-appointments">
          <h2>Upcoming Appointments</h2>
          <ul>
            <li>Appointment with Dr. Smith on October 1, 2024</li>
            <li>Check-up with Dr. Lee on October 15, 2024</li>
            <li>Dental cleaning with Dr. Adams on November 5, 2024</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Patients;
