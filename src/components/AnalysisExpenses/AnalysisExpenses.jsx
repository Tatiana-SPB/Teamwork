import { expensesData } from "../../data";
import {
  Scontent,
  Smain,
  Stable__box,
  Stable__name,
  Sttl,
} from "./AnalysisExpenses.js";

function AnalysisExpenses() {
  const categories = [
    "Еда",
    "Транспорт",
    "Жилье",
    "Развлечения",
    "Образование",
    "Другое",
  ];

  return (
    <main className="Smain">
      <h1 className="Sttl">Анализ расходов</h1>
      <div className="Scontent">
        <div className="calenar__box">
          <h2 className="calenar__name">Период</h2>
          <Scalenar></Scalenar>
        </div>
        <div className="diagram__box">
          <h2 className="diagram__heading">{expensesData.item.amount} ₽</h2>
          <span className="diagram__deascription">
            Расходы за {expensesData.item.date}
          </span>
        </div>
      </div>
    </main>
  );
}

export default AnalysisExpenses;
