import { IconDirSub, IconLeft, IconRight } from "@/assets/icons/icons";
import { getMonthByNum } from "@/utils/days";

interface GoogleCalendarHeaderProps {
  // setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
  setCurrentMonth: (n: number) => void;
  setSideBarExpanded: () => void;
  currentYear: number;
  currentMonth: number;
}
const GoogleCalendarHeader = ({
  setCurrentMonth,
  setSideBarExpanded,
  currentYear,
  currentMonth,
}: GoogleCalendarHeaderProps) => {
  return (
    <div className=" grow-0 flex py-2 px-4 items-center justify-between">
      <div className="flex space-x-4 items-center">
        <div
          className="btn btn-neutral btn-sm"
          onClick={() => setSideBarExpanded()}
        >
          <IconDirSub />
        </div>
        <h1>Calendar</h1>
      </div>
      <div className=" flex space-x-24  "> 
        <div className="flex space-x-4 items-center">
          <div className="btn btn-outline btn-ghost btn-sm">Today</div>
          <div className="btn  whitespace-nowrap">
            {getMonthByNum(currentMonth,"MMMM")} {currentYear}
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="btn btn-outline" onClick={() => setCurrentMonth(-1)}>
            <IconLeft />
          </div>

          <div className="btn btn-outline" onClick={() => setCurrentMonth(1)}>
            <IconRight />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default GoogleCalendarHeader;
