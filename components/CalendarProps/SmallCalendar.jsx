"use client";

import GlobalContext from "@/context/GlobalContext";
import { getMonth } from "@/utils/getDate";
import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";

const SmallCalendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  const { monthIndex, setSmallCalendarMonth, selectedDay, setSelectedDay } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }, [monthIndex]);

  const handlePrevMonth = () => {
    setCurrentMonthIndex(currentMonthIndex - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex(currentMonthIndex + 1);
  };

  const getDateClass = (day) => {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currentDay = day.format(format);
    const slctdDay = selectedDay && selectedDay.format(format);

    if (nowDay === currentDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currentDay === slctdDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-semibold";
    } else {
      return "";
    }
  };

  return (
    <div className="mt-8">
      <header className="flex justify-between">
        <p className="text-gray-500 font-semibold text-xs">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <div>
          <button
            className="cursor-pointer text-gray-600 mx-2 font-bold text-xs"
            onClick={handlePrevMonth}
          >
            &lt;
          </button>
          <button
            className="cursor-pointer text-gray-600 mx-2 font-bold text-xs"
            onClick={handleNextMonth}
          >
            &gt;
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-xs py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, i) => (
              <button
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIndex);
                  setSelectedDay(day);
                }}
                key={i}
                className={`py-1 w-full ${getDateClass(day)}`}
              >
                <span>{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
