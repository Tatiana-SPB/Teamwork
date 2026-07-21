import Calendar from "react-calendar";
import { useState } from "react";
import "../Calendar/Calendar.styled.js";

export function Scalendar({ onDateSelect, selectedDate }) {
  const [calendarValue, setCalendarValue] = useState(selectedDate);

  const handleChange = (value) => {
    const date = Array.isArray(value) ? value : value;

    if (date) {
      setCalendarValue(date);
      onDateSelect(date);
    }
  };

  return (
    <Calendar
      onChange={handleChange}
      value={calendarValue}
      selectRange={false}
      locale="ru-RU"
      showNeighborMonth={false}
      tileClassName={({ date }) => {
        if (!selectedDate) return "";

        const isSelected =
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear();

        return isSelected ? "calendar-tile--selected" : "";
      }}
      tileContent={({ date }) => {
        const today = new Date();
        if (date.toDateString() === today.toDateString()) {
          return <span className="calendar-tile__today-dot"></span>;
        }
        return null;
      }}
    />
  );
}
