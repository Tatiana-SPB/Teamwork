import ExpensesChart from "./ExpensesChart.jsx";
import { transactions } from "../../data.js";

import {
  Scalendar__ttl,
  Sdiagram__box,
  Sdiagram__description,
} from "../AnalysisExpenses/AnalysisExpenses.js";

function parseDateStr(str) {
  const [day, month, year] = str.split(".").map(Number);
  return new Date(year, month - 1, day);
}

// Конвертирует JS Date в строку DD.MM.YYYY для отображения
function dateToStr(date) {
  if (!date) return "";
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  return `${d}.${m}.${y}`;
}

function Diagram({ startDate, endDate }) {
  // Если даты не выбраны — показываем пустой/заглушечный отчёт
  if (!startDate || !endDate) {
    return (
      <Sdiagram__box>
        <Scalendar__ttl>0 ₽</Scalendar__ttl>
        <Sdiagram__description>Выберите даты на календаре</Sdiagram__description>
        <div></div>
      </Sdiagram__box>
    );
  }

  const start = startDate instanceof Date ? startDate : parseDateStr(startDate);
  const end = endDate instanceof Date ? endDate : parseDateStr(endDate);

  const filtered = transactions.filter((t) => {
    const tDate = typeof t.date === "string" ? parseDateStr(t.date) : t.date;
    return tDate >= start && tDate <= end;
  });

  const categories = [
    "Еда",
    "Транспорт",
    "Жилье",
    "Развлечения",
    "Образование",
    "Другое",
  ];
  const colors = [
    "#CFA8FF",
    "#FFC966",
    "#AEE8FF",
    "#A9A0FF",
    "#B6F28A",
    "#FFB3B3",
  ];

  const expensesData = categories.map((label, idx) => {
    const sum = filtered
      .filter((t) => t.category === label)
      .reduce((acc, t) => acc + t.amount, 0);
    return { label, value: sum, color: colors[idx] };
  });

  const totalExpenses = expensesData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Sdiagram__box>
      <Scalendar__ttl>{totalExpenses.toLocaleString()} ₽</Scalendar__ttl>
      <Sdiagram__description>
        Расходы за период: {dateToStr(startDate)} - {dateToStr(endDate)}
      </Sdiagram__description>
      <div>
        <ExpensesChart data={expensesData} total={totalExpenses} />
      </div>
    </Sdiagram__box>
  );
}

export default Diagram;
