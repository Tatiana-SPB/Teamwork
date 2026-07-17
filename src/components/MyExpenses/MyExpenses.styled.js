import styled from "styled-components";

export const Smain = styled.main`
  width: 1440px;
  padding: 0px 119px;
  min-height: 100vh;
  background-color: #f4f5f6;
`;

export const Sttl = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: 0px;
  color: #000000;
  text-align: left;
`;

export const Scontent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 34px;
  margin-bottom: 72px;
`;

export const Stable__box = styled.div`
  width: 789px;
  height: 618px;
  overflow-y: hidden;
  overflow-x: hidden;
  padding: 32px;
  display: block;
  box-shadow: 0px 20px 67px -12px #00000021;
  border-radius: 30px;
  background-color: #fff;
  color: #000;
`;

export const Stable__name = styled.h2`
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: left;
`;

export const Stable__scrollWrapper = styled.div`
  max-height: 479px;
  overflow-y: auto;
  margin-top: 32px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    height: 100px;
    background: #d9d9d9;
    border-radius: 30px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Stable__table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const Stable__header = styled.thead`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #999999;

  tr {
    background-color: #f5f5f5;
  }
`;

export const TableHeadCell = styled.th`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
  padding-bottom: 6px;
  text-align: left;
  border-bottom: 0.5px solid #999999;
  color: #999999;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const Stable__data = styled.tbody`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;

  tr {
    padding-bottom: 32px;
  }
  td {
    margin: 0 auto;
    padding-top: 14px;
    text-align: left;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
  }
`;

export const Sform = styled.form`
  width: 379px;
  height: 618px;
  overflow-y: hidden;
  overflow-x: hidden;
  padding: 32px;
  display: block;
  box-shadow: 0px 20px 67px -12px #00000021;
  border-radius: 30px;
  background-color: #fff;
  color: #000;
`;

export const S_data_box = styled.div`
  width: 379px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const S__label = styled.label`
  display: block;
  width: 313px;
  margin-top: 24px;
  margin-bottom: 16px;
  text-align: left;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
`;

export const S__input = styled.input`
  width: 313px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 0.5px solid #999999;
  padding: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #000;
`;

export const S__cat = styled.div`
  width: 313px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`;

export const S__cat_btn = styled.button`
  background-color: #f4f5f6;
  color: #000;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e9eaec;
  }
`;

export const S_btn = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 12px;
  background-color: #7334ea;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
