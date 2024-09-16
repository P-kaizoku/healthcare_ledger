import React, { useState } from 'react';
import '../index.css'; // Import global styles

function Doctors() {
  // Dummy patient data
  const patients = [
    { id: 1, name: 'John Doe', age: 45 },
    { id: 2, name: 'Jane Smith', age: 38 },
    { id: 3, name: 'Emily Johnson', age: 29 },
    { id: 4, name: 'Michael Brown', age: 50 },
    { id: 5, name: 'Sarah Davis', age: 42 },
    { id: 6, name: 'David Wilson', age: 35 },
  ];

  // State to manage the number of visible patients
  const [visibleCount, setVisibleCount] = useState(3);
  const [showLess, setShowLess] = useState(false);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
    setShowLess(true);
  };

  const handleShowLess = () => {
    setVisibleCount(prevCount => Math.max(prevCount - 3, 3));
    if (visibleCount <= 6) {
      setShowLess(false);
    }
  };

  return (
    <div className="page-container">
      <div className="doctors-layout">
        <section className="doctors-content">
          <h2>Doctors Page</h2>

          {/* Search Bar Display */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Aadhar Number"
              
            />
            <button className="search-btn" >Search</button>
          </div>

          {/* Patients List */}
          <div className="patients-list">
            <h3>Patients List</h3>
            <ul>
              {patients.slice(0, visibleCount).map(patient => (
                <li key={patient.id}>
                  <span>Name: {patient.name}</span> <span>Age: {patient.age}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons to expand/collapse the list */}
          {visibleCount < patients.length && (
            <button className="show-more-btn" onClick={handleShowMore}>
              Show More
            </button>
          )}
          {showLess && (
            <button className="show-less-btn" onClick={handleShowLess}>
              Show Less
            </button>
          )}
        </section>
      </div>
    </div>
  );
}

export default Doctors;
