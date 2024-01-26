import clsx from "clsx";
import { useState } from "react";

interface DayCellProps {
  rowIdx: number;
  isNotCurrentMonth?: boolean;
  isPast?: boolean;
  isToday?: boolean;
  day: any;
}
const DayGrid = ({
  day,
  rowIdx,
  isNotCurrentMonth = false,
  isPast = false,
  isToday = false,
}: DayCellProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };
  const handleHoverOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={clsx(
        " text-neutral bg-neutral-content duration-200 transition-all flex flex-col border-2 border-[#2222]",
        isHovered && "  cursor-pointer",
      )}
    >
      {rowIdx === 0 && (
        <p className="  text-center text-xs my-1 ">{day.format("ddd")}</p>
      )}
      <p
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        className={clsx("text-center  mx-auto p-1 rounded-xl")}
      >
        <div
          className={clsx(
            "p-1 w-5 h-5 items-center justify-center flex rounded-full",
            isHovered && " bg-neutral text-accent bg-opacity-60",
            isToday && "  bg-primary-content  text-accent"
          )}
        >
          {day.date()}
        </div>
      </p>
    </div>
  );
};

export default DayGrid;
