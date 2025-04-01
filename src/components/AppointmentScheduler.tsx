import React, { useState } from "react";

// Example interface for availability
interface DayAvailability {
  day: string;
  timeString: string; // Example: "9:00 AM - 5:00 PM"
}

// Example props to receive availability data
interface AppointmentSchedulerProps {
  availability: DayAvailability[];
}

const AppointmentScheduler: React.FC<AppointmentSchedulerProps> = ({
  availability,
}) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [appointments, setAppointments] = useState<string[]>([]);

  const handleBookAppointment = (slot: string) => {
    setAppointments([...appointments, slot]);
    setSelectedSlot(null);
    alert(`Appointment booked: ${slot}`);
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <div>
        {availability.map((day) => (
          <div key={day.day} style={{ marginBottom: "10px" }}>
            <strong>{day.day}</strong>: {day.timeString || "No availability"}
            {day.timeString && (
              <button
                onClick={() => setSelectedSlot(`${day.day} - ${day.timeString}`)}
              >
                View Slots
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedSlot && (
        <div style={{ marginTop: "20px" }}>
          <h3>Selected Slot: {selectedSlot}</h3>
          <button onClick={() => handleBookAppointment(selectedSlot)}>
            Confirm Appointment
          </button>
          <button onClick={() => setSelectedSlot(null)}>Cancel</button>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <h3>Confirmed Appointments:</h3>
        <ul>
          {appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <li key={index}>{appointment}</li>
            ))
          ) : (
            <p>No appointments booked yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AppointmentScheduler;