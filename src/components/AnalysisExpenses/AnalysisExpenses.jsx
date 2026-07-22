import { StyledCalendar } from "../Calendar/Calendar.styled.js";
import {
  Scalendar__box,
  Scalendar__ttl,
  Scontent,
  Smain,
  Sttl,
} from "./AnalysisExpenses.js";
import Diagram from "../Diagram/Diagram.jsx";
import { useState } from "react";

function AnalysisExpenses() {
  const [selection, setSelection] = useState(null);

  const handleDateClick = (date) => {
    if (!selection) {
      // 1-й клик: начало периода
      setSelection(date);
    } else if (selection instanceof Date) {
      // 2-й клик: конец периода
      const start = selection;
      const end = date;

      // Если кликнули по дате ДО начала — меняем местами, чтобы start <= end
      if (end < start) {
        setSelection({ start: end, end: start });
      } else {
        setSelection({ start, end });
      }
    } else {
      // Уже есть диапазон — сбрасываем и начинаем заново
      setSelection(date);
    }
  };

  let startDate = null;
  let endDate = null;

  if (selection instanceof Date) {
    startDate = selection;
    endDate = selection;
  } else if (typeof selection === "object" && selection !== null) {
    startDate = selection.start;
    endDate = selection.end;
  }

  return (
    <Smain>
      <Sttl>Анализ расходов</Sttl>
      <Scontent>
        <Scalendar__box>
          <Scalendar__ttl>Период</Scalendar__ttl>
          <StyledCalendar
            value={selection} // можно передавать null, Date или { start, end }
            onChange={handleDateClick}
            locale="ru"
            formats={{
              navigationLabel: (date, locale) => {
                const month = new Intl.DateTimeFormat(locale, {
                  month: "long",
                }).format(date);
                const year = date.getFullYear();
                return `${month} ${year}`;
              },
            }}
          />
        </Scalendar__box>

        <Diagram startDate={startDate} endDate={endDate} />
      </Scontent>
    </Smain>
  );
}

export default AnalysisExpenses;
