import { useState } from "react";
import { StyledCalendar } from "../Calendar/Calendar.styled.js";
import {
  Scalendar__box,
  Scalendar__ttl,
  Scontent,
  Sdiagram__box,
  Sdiagram__description,
  Smain,
  Sttl,
} from "./AnalysisExpenses.js";
import ExpensesChart from "./ExpensesChart.jsx";

function AnalysisExpenses() {
  const [date, setDate] = useState(new Date());

  const expensesData = [
    { label: "Еда", value: 3590, color: "#CFA8FF" },
    { label: "Транспорт", value: 1835, color: "#FFC966" },
    { label: "Жилье", value: 0, color: "#AEE8FF" },
    { label: "Развлечения", value: 1250, color: "#A9A0FF" },
    { label: "Образование", value: 600, color: "#B6F28A" },
    { label: "Другое", value: 2306, color: "#FFB3B3" },
  ];

  const totalExpenses = expensesData.reduce((sum, item) => sum + item.value, 0);

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
        <Sdiagram__box>
          <Scalendar__ttl>{totalExpenses.toLocaleString()} ₽</Scalendar__ttl>
          <Sdiagram__description>Расходы за ...</Sdiagram__description>
          <div>
            <ExpensesChart data={expensesData} total={totalExpenses} />
          </div>
        </Sdiagram__box>
      </Scontent>
    </Smain>
  );
}

export default AnalysisExpenses;
