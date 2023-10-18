"use client";
import GlobalContext from "@/context/GlobalContext";
import dayjs from "dayjs";
import React, { useContext } from "react";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleResetDate = () => {
    setMonthIndex(dayjs().month());
  };

  return (
    <header className="px-4 py-2 flex items-center">
      {/* <h1 className="text-sm font-bold">アドミン</h1> */}
      <h1 className="ml-4 text-lg font-semibold">Calendar</h1>
      <button
        className="border rounded py-1 px-4 ml-5"
        onClick={handleResetDate}
      >
        Today
      </button>
      <button className="cursor-pointer mx-2" onClick={handlePrevMonth}>
        <svg
          className="w-3 h-3 text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
          />
        </svg>
      </button>
      <button className="cursor-pointer mx-2" onClick={handleNextMonth}>
        <svg
          className="w-3 h-3 text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      </button>
      <h2 className="ml-4 font-medium text-gray-500">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalendarHeader;
