import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BookingPage from "./components/BookPage";
import TimeOffManager from "./components/TimeOffManager";
import AvailabilityManager from "./components/AvailabilityManager";
import AppointmentScheduler from "./components/AppointmentScheduler";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";

// const [availability, setAvailability] = useState([
//   { day: "Monday", timeString: "9:00 AM - 5:00 PM" },
//   { day: "Tuesday", timeString: "10:00 AM - 4:00 PM" },
//   // Add other days...
// ]);


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingPage />} />
        <Route path="/timeoff" element={<TimeOffManager />} />
        <Route path="/availabilitymanager" element={<AvailabilityManager />} />
        <Route path="/appts" element={<AppointmentScheduler availability={[ { day: "Monday", timeString: "9:00 AM - 5:00 PM" },{ day: "Tuesday", timeString: "10:00 AM - 4:00 PM" },]} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;