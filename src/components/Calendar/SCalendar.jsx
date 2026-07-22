import Calendar from "react-calendar";
import "../Calendar/Calendar.styled.js";

export function Scalendar({ value, onChange, locale }) {
  // Никакого internalValue и useEffect — value приходит сверху, его сразу передаём в Calendar
  const displayValue =
    typeof value === "object" && value !== null && "start" in value
      ? [value.start, value.end]
      : value;

  const handleChange = (raw) => {
    const date = Array.isArray(raw) ? raw[0] : raw;
    if (date) {
      onChange(date);
    }
  };

  return (
    <Calendar
      onChange={handleChange}
      value={displayValue}
      selectRange={false}
      locale={locale}
      showNeighborMonths={false}
      tileClassName={({ date }) => {
        if (!value) return "";

        let isStart = false;
        let isEnd = false;
        let isInRange = false;

        const isSameDate = (a, b) =>
          a.getDate() === b.getDate() &&
          a.getMonth() === b.getMonth() &&
          a.getFullYear() === b.getFullYear();

        if (value instanceof Date) {
          // Один клик: показываем как диапазон из 1 дня
          isStart = isSameDate(date, value);
          isEnd = isStart;
          isInRange = isStart;
        } else if (typeof value === "object" && value !== null) {
          const { start, end } = value;
          isStart = isSameDate(date, start);
          isEnd = isSameDate(date, end);
          isInRange = date >= start && date <= end;
        }

        if (isInRange && !isStart && !isEnd) {
          return "calendar-tile--selected-range-middle";
        }
        if (isStart && isEnd) {
          return "calendar-tile--selected-range-both";
        }
        if (isStart) {
          return "calendar-tile--selected-start";
        }
        if (isEnd) {
          return "calendar-tile--selected-end";
        }
        return "";
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
