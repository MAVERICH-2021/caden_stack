import MonthLayout from "./MonthLayout/MonthLayout";
import GoogleCalendarSidebar from "../GoogleCalendarSidebar/GoogleCalendarSidebar";
import WeekNumIndicator from "./MonthLayout/WeekNumIndicator";

interface GoogleCalendarBodyProps {
  month: number;
  year: number;
  sideBarExpanded: boolean;
}
const GoogleCalendarBody = ({
  year,
  month,
  sideBarExpanded,
}: GoogleCalendarBodyProps) => {
  return (
    <div className=" bg-neutral grow flex prevent-select">
      {sideBarExpanded && <GoogleCalendarSidebar />}
      <div className="flex w-full">
        <WeekNumIndicator />
        <MonthLayout year={year} month={month} />
      </div>
    </div>
  );
};

export default GoogleCalendarBody;
