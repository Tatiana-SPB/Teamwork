import Header from "../components/Header/Header.jsx";
import AnalysisExpenses from "../components/AnalysisExpenses/AnalysisExpenses.jsx";
import { Outlet } from "react-router-dom";

const AnalysisExpensesPage = () => {
  return (
    <>
      <Header />
      <AnalysisExpenses />
      <Outlet />
    </>
  );
};

export default AnalysisExpensesPage;
