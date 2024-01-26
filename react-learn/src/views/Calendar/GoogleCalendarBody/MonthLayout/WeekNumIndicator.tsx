interface IndicatorProps {
  weekNum: number;
}
const Indicator = ({ weekNum }: IndicatorProps) => {
  return (
    <div className="flex flex-col justify-center items-center p-2 bg-neutral bg-opacity-60">
      <div className=" text-neutral-content text-sm ">{weekNum}</div>
    </div>
  );
};

const WeekNumIndicator = () => {
  return (
    <div className="grid grid-rows-5 h-full">
      {Array.from(Array(5).keys()).map((weekNum, i) => (
        <Indicator weekNum={weekNum} key={i} />
      ))}
    </div>
  );
};

export default WeekNumIndicator;
