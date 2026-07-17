import { useState } from "react";
import { StyledCalendar } from "../Calendar/Calendar.styled.js";
import {
  Scalendar__box,
  Scalendar__ttl,
  Scontent,
  Smain,
  Sttl,
} from "./AnalysisExpenses.js";

function AnalysisExpenses() {
  const [date, setDate] = useState(new Date());

  const categories = [
    "Еда",
    "Транспорт",
    "Жилье",
    "Развлечения",
    "Образование",
    "Другое",
  ];

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

        {/* Блок диаграммы */}
        <div className="diagram__box">
          <h2 className="diagram__heading">10000 ₽</h2>
          <span className="diagram__deascription">Расходы за</span>

          <div>
            {categories.map((cat, idx) => (
              <div key={idx} style={{ textAlign: "center", minWidth: "80px" }}>
                <div></div>
                <p>{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </Scontent>
    </Smain>
  );
}

export default AnalysisExpenses;
