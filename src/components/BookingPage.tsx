import React, { useState } from "react";

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleBooking = () => {
    console.log("Booking confirmed for date: ", selectedDate);
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default BookingPage;