import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  selectedDay: null,
  setSelectedDay: (day) => {},
  showModal: false,
  setShowModal: () => {}
})

export default GlobalContext