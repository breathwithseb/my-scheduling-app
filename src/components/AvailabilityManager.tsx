import React, { useState } from "react";

interface DayAvailability {
  day: string;
  timeString: string;
}

const AvailabilityManager: React.FC = () => {
  // State to track availability for each day
  const [availability, setAvailability] = useState<DayAvailability[]>(
    [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ].map((day) => ({ day, timeString: "" }))
  );

  // Handler for updating availability
  const updateAvailability = (day: string, newTimeString: string) => {
    setAvailability(
      availability.map((entry) =>
        entry.day === day ? { ...entry, timeString: newTimeString } : entry
      )
    );
  };

  return (
    <div>
      <h2>Manage Weekly Availability</h2>
      {availability.map((entry) => (
        <div key={entry.day} style={{ marginBottom: "10px" }}>
          <label>
            <strong>{entry.day}</strong>:{" "}
            <input
              type="text"
              placeholder="e.g., 9:00 AM - 5:00 PM"
              value={entry.timeString}
              onChange={(e) => updateAvailability(entry.day, e.target.value)}
            />
          </label>
        </div>
      ))}
      <div>
        <h3>Current Availability:</h3>
        <ul>
          {availability.map((entry) => (
            <li key={entry.day}>
              {entry.day}: {entry.timeString || "No availability set"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AvailabilityManager;