import React, { useState } from "react";

interface DayAvailability {
  day: string;
  timeString: string;
}

interface AvailabilityManagerProps {
  onUpdateAvailability: (availability: DayAvailability[]) => void;
}

const AvailabilityManager: React.FC<AvailabilityManagerProps> = ({ onUpdateAvailability }) => {
  const [availability, setLocalAvailability] = useState<DayAvailability[]>(
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

  const handleUpdate = (day: string, newTimeString: string) => {
    const updatedAvailability = availability.map((entry) =>
      entry.day === day ? { ...entry, timeString: newTimeString } : entry
    );
    setLocalAvailability(updatedAvailability);
    onUpdateAvailability(updatedAvailability); // Update parent state
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
              onChange={(e) => handleUpdate(entry.day, e.target.value)}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default AvailabilityManager;