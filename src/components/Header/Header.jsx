import { useNavigate } from "react-router-dom";
import {
  Scontainer,
  SHeader,
  SHeader__block,
  Sheader__logo,
  Sheader__nav,
  Sheader__nav_el,
  Sheader__user,
} from "./Header.styled.js";

export function Header() {
  const navigate = useNavigate();

  const handleMyExpenses = () => {
    navigate("/");
  };

  const handleAnalysisExpenses = () => {
    navigate("/analysis");
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };
  return (
    <SHeader>
      <Scontainer>
        <SHeader__block>
          <Sheader__logo>
            <a href="#" target="_self">
              <img src="/images/Vector.png" alt="logo" />
            </a>
          </Sheader__logo>
          <Sheader__nav>
            <Sheader__nav_el
              onClick={handleMyExpenses}
              to="/"
              style={({ isActive }) =>
                isActive
                  ? { color: "#7334ea", fontWeight: 600 }
                  : { color: "#000", fontWeight: 400 }
              }
            >
              Мои расходы
            </Sheader__nav_el>
            <Sheader__nav_el
              onClick={handleAnalysisExpenses}
              to="/analysis"
              style={({ isActive }) =>
                isActive
                  ? { color: "#7334ea", fontWeight: 600 }
                  : { color: "#000", fontWeight: 400 }
              }
            >
              Анализ расходов
            </Sheader__nav_el>
          </Sheader__nav>
          <Sheader__user onClick={handleLogout} to="/login">
            Выйти
          </Sheader__user>
        </SHeader__block>
      </Scontainer>
    </SHeader>
  );
}

export default Header;
