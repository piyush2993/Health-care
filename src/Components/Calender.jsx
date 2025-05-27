import React from "react";
import { calendarData } from "../data/calenderData";
import "../styles/calender.css";

const Calender = () => {
  const { month, year, days, selected } = calendarData;
  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>
          {month} {year}
        </h2>
        <div>
          <button>&larr;</button>
          <button>&rarr;</button>
        </div>
      </div>

      <div className="calendar-grid">
        <div></div>
        {days.map((day, idx) => (
          <div
            key={idx}
            className={`day-header ${
              selected.day === day.day ? "day-selected" : ""
            }`}
          >
            <span>{day.day}</span> <br />
            <span>{day.date}</span>
          </div>
        ))}

        {timeSlots.map((time, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className="time-label">{time}</div>
            {days.map((day, colIndex) => {
              const isSelected =
                day.day === selected.day && time === selected.time;
              const isSlot = day.slots.includes(time);

              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`slot ${
                    isSelected
                      ? "slot-selected"
                      : isSlot
                      ? "slot-available"
                      : ""
                  }`}
                >
                  {isSlot ? time : "-"}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calender;
