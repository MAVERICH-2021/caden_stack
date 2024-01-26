import { getDaysInMonth } from "@/utils/days";
import DayGrid from "./DayGrid";
import React from "react";

interface MonthLayoutProps {
  month: number;
  year: number;
}

const MonthLayout = ({ year, month }: MonthLayoutProps) => {
  const daysData = getDaysInMonth(month);
  const today = new Date();
  // console.table(daysData);
  return (
    <div className="grow grid grid-cols-7 grid-rows-5">
      {/* <p>{JSON.stringify(daysData)}</p> */}
      {daysData.map((dayRow, i) => (
        <React.Fragment key={i}>
          {dayRow.map((day, ii) => {
            return (
              <DayGrid
                day={day}
                rowIdx={i}
                key={ii}
                isToday={today.getDate() === day.date()}
              />
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MonthLayout;
