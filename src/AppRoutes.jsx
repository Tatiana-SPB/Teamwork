import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import MyExpensesPage from "./pages/MyExpensesPage.jsx";
import AnalysisExpensesPage from "./pages/AnalysisExpensesPage.jsx";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyExpensesPage />} />
        <Route path="/analysis" element={<AnalysisExpensesPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
