import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AvailabilityManager from "./components/AvailabilityManager";
import AppointmentScheduler from "./components/AppointmentScheduler";
import Dashboard from "./components/Dashboard"; // Example of another component
import BookingPage from "./components/BookingPage"; // Example of another component

const App: React.FC = () => {
  // State to share availability data between components
  const [availability, setAvailability] = useState([
    { day: "Monday", timeString: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", timeString: "9:00 AM - 5:00 PM" },  
    { day: "Wednesday", timeString: "9:00 AM - 5:00 PM"},
    { day: "Thursday", timeString: "9:00 AM - 5:00 PM" },
    { day: "Friday", timeString: "9:00 AM - 5:00 PM" },
    { day: "Saturday", timeString: "9:00 AM - 5:00 PM" },
    { day: "Sunday", timeString: "9:00 AM - 5:00 PM" },
  ]);

  return (
    <Router>
      <nav>
        {/* Navigation Links */}
        <ul>
          <li><Link to="/">Booking Page</Link></li>
          <li><Link to="/availability">Manage Availability</Link></li>
          <li><Link to="/schedule">Schedule Appointment</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* Route for Booking Page */}
        <Route path="/" element={<BookingPage />} />
        
        {/* Route for Availability Manager */}
        <Route 
          path="/availability" 
          element={<AvailabilityManager onUpdateAvailability={setAvailability} />} 
        />
        
        {/* Route for Appointment Scheduler */}
        <Route 
          path="/schedule" 
          element={<AppointmentScheduler availability={availability} />} 
        />

        {/* Route for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;