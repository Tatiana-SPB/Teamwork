import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const SHeader = styled.header`
  width: 1440px;
  padding: 0px 120px;
  height: 64px;
  background-color: #ffffff;
`;

export const SHeader__block = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
`;

export const Scontainer = styled.div`
  width: 100%;
`;

export const Sheader__nav = styled.div`
  padding-left: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

export const Sheader__nav_el = styled(NavLink)`
  font-size: 14px;
  line-height: 170%;
  letter-spacing: 0px;
  text-align: center;
  color: "#000";
  font-weight: "400";
`;

export const Sheader__user = styled(Link)`
  margin-left: 414px;
  font-weight: 600;
  font-size: 14px;
  line-height: 170%;
  letter-spacing: 0px;
  text-align: center;
  color: #000000;
`;

export const Sheader__logo = styled.div`
  img {
    width: 144px;
  }
`;
