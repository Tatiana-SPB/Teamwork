import { transactions } from "../../data.js";
import ExpensesChart from "./ExpensesChart.jsx";

import {
  Scalendar__ttl,
  Sdiagram__box,
  Sdiagram__description,
} from "../AnalysisExpenses/AnalysisExpenses.js";

function Diagram() {
  function parseDate(str) {
    const [day, month, year] = str.split(".").map(Number);
    return new Date(year, month - 1, day); // month 0-based
  }

  let startDateStr = "03.07.2024";
  let endDateStr = "03.07.2024";

  const startDate = parseDate(startDateStr);
  const endDate = parseDate(endDateStr);

  // Фильтруем по дате
  const filtered = transactions.filter((t) => {
    const tDate = parseDate(t.date);
    return tDate >= startDate && tDate <= endDate;
  });

  // Группируем по категориям и считаем суммы
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
        Расходы за период: {startDateStr} - {endDateStr}
      </Sdiagram__description>
      <div>
        <ExpensesChart data={expensesData} total={totalExpenses} />
      </div>
    </Sdiagram__box>
  );
}

export default Diagram;
