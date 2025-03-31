import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BookingPage from "./components/BookPage";
import TimeOffManager from "./components/TimeOffManager";
import AvailabilityManager from "./components/AvailabilityManager";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingPage />} />
        <Route path="/timeoff" element={<TimeOffManager />} />
        <Route path="/availabilitymanager" element={<AvailabilityManager />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;