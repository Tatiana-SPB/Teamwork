import Header from "../components/Header/Header.jsx";
import MyExpenses from "../components/MyExpenses/MyExpenses.jsx";
import { Outlet } from "react-router-dom";

const MyExpensesPage = () => {
  return (
    <>
      <Header />
      <MyExpenses />
      <Outlet />
    </>
  );
};

export default MyExpensesPage;
