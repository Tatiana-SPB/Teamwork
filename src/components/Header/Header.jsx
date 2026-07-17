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
            <Sheader__nav_el style={{ color: "#7334ea", fontWeight: "600" }}>
              Мои расходы{" "}
            </Sheader__nav_el>
            <Sheader__nav_el>Анализ расходов</Sheader__nav_el>
          </Sheader__nav>
          <Sheader__user>Выйти</Sheader__user>
        </SHeader__block>
      </Scontainer>
    </SHeader>
  );
}

export default Header;
