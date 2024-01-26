import { useEffect, useState } from "react";
import GoogleCalendarBody from "./GoogleCalendarBody/GoogleCalendarBody";
import GoogleCalendarHeader from "./GoogleCalendarHeader/GoogleCalendarHeader";

const GoogleCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  )

  //TODO: Why currentMonth===0 at first render?
  // console.log(currentMonth);
  const [sideBarExpanded, setSideBarExpanded] = useState<boolean>(false);
  const handleSideBarExpanded = () => {
    // console.log(sideBarExpanded);
    setSideBarExpanded(!sideBarExpanded);
  };
  const handleSetCurrentMonth = (n?: number) => {
    if (n === undefined) return;
    if (currentMonth + n > 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    }
    if (currentMonth + n < 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    }
    setCurrentMonth(currentMonth + n);
    // console.log(currentMonth,"+",n,"=",currentMonth+n);
  };



  return (
    <div id="GoogleCalendar" className="w-full h-full flex flex-col">
      <GoogleCalendarHeader
        setSideBarExpanded={() => handleSideBarExpanded()}
        setCurrentMonth={handleSetCurrentMonth}
        currentYear={currentYear}
        currentMonth={currentMonth}
      />
      <GoogleCalendarBody
        sideBarExpanded={sideBarExpanded}
        month={currentMonth}
        year={currentYear}
      />
    </div>
  );
};

export default GoogleCalendar;
