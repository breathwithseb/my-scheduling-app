import React, { useState } from "react";

const TimeOffManager: React.FC = () => {
  const [timeOffDates, setTimeOffDates] = useState<string[]>([]);

  const addTimeOff = (date: string) => {
    setTimeOffDates([...timeOffDates, date]);
  };

  return (
    <div>
      <h2>Manage Time Off</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const date = form["date"].value;
          addTimeOff(date);
        }}
      >
        <input type="date" name="date" required />
        <button type="submit">Block Date</button>
      </form>
      <ul>
        {timeOffDates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default TimeOffManager;