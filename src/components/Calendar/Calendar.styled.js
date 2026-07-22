import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

export const StyledCalendar = styled(Calendar)`
  max-height: 450px;
  overflow-y: auto;
  border-radius: 16px;
  padding: 8px;
  background: #ffffff;
  border: none;

  .react-calendar__navigation {
    display: flex;
    margin-bottom: 1em;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }

  .react-calendar__navigation__prev2-button {
    display: none;
  }

  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__navigation__prev-button {
    color: #000;
    font-size: 20px;
    line-height: 1;
    order: 2;
    text-align: right;
    padding-right: 16px;
  }

  .react-calendar__navigation__next-button {
    color: #000;
    font-size: 20px;
    line-height: 1;
    order: 3;
    text-align: right;
    padding-right: 7px;
  }

  .react-calendar__navigation button {
    min-width: 14px;
    background: none;
    text-align: right;
  }

  .react-calendar__navigation__label {
    text-align: left;
  }

  .react-calendar__navigation__label__labelText--from {
    color: #000;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
  }

  .react-calendar__month-view__weekdays {
    position: sticky;
    top: 0;
    z-index: 10;
    background: #ffffff;
    margin-bottom: 8px;
  }

  .react-calendar__month-view__weekdays__weekday {
    abbr {
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;
      letter-spacing: 0%;
      text-align: center;
      vertical-align: middle;
      color: #999999;
      text-decoration: none;
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    width: 40px;
    height: 40px;
    border-radius: 60px;
    padding: 10px 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    color: #94a6be;
    background-color: #f4f5f6;
    font-size: 12px;
    font-weight: 400;
  }

  .react-calendar__tile {
    width: 40px;
    height: 40px;
    border-radius: 60px;
    padding: 10px 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    color: #000;
    background-color: #f4f5f6;
    font-size: 10px;
    line-height: 100%;
    padding-bottom: 7px;
    padding-top: 7px;
  }

  .react-calendar__month-view__days__day {
    width: 40px;
    height: 40px;
    border-radius: 60px;
    padding: 10px 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    color: #000;
    background-color: #f4f5f6;
    font-size: 12px;
    font-weight: 400;
  }

  .react-calendar__tile--now {
    background-color: #eaeef9;
    color: #000;
    border-radius: 50%;
  }

  .react-calendar__tile--active {
    background: #f1ebfd;
    color: #7334ea;
    border-radius: 50%;
  }
`;

const styles = `
  .calendar-tile--selected-start {
    background: rgb(241, 235, 253);
    color: rgb(115, 52, 234);
    border-radius: 8px 0 0 8px !important;
  }

  .calendar-tile--selected-end {
    background: rgb(241, 235, 253);
    color: rgb(115, 52, 234);
    border-radius: 0 8px 8px 0 !important;
  }

  .calendar-tile--selected-range-middle {
    background: rgb(241, 235, 253);
    color: rgb(115, 52, 234);
    border-radius: 0 !important;
  }

  .calendar-tile--selected-range-both {
    background: rgb(241, 235, 253);
    color: rgb(115, 52, 234);
    border-radius: 8px !important;
  }
`;

const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
if (!document.querySelector("style[data-calendar-range-styles]")) {
  styleElement.setAttribute("data-calendar-range-styles", "true");
  document.head.appendChild(styleElement);
}
