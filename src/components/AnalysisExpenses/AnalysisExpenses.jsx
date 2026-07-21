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
  const [date, setDate] = useState(new Date());

  return (
    <Smain>
      <Sttl>Анализ расходов</Sttl>
      <Scontent>
        <Scalendar__box>
          <Scalendar__ttl>Период</Scalendar__ttl>
          <StyledCalendar
            value={date}
            onChange={(newDate) => setDate(newDate)}
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

        <Diagram></Diagram>
      </Scontent>
    </Smain>
  );
}

export default AnalysisExpenses;
