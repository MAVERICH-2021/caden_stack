import dayjs from 'dayjs';

export const getDaysInMonth = (month = dayjs().month()) => {

   const year = dayjs().year();
   const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day(); // 0-6 (0 is Sunday)

   let prevMonthDaysCount = 0-firstDayOfTheMonth
   const daysMatrix = new Array(5).fill([]).map(()=> new Array(7).fill(null).map(()=>{
       prevMonthDaysCount++
       return dayjs(new Date(year, month, prevMonthDaysCount))
      //  return prevMonthDaysCount
   }));

  return daysMatrix;
}

export const getMonthByNum = (month = dayjs().month(),format:string ="MMMM"):string => { //return month in ddd format
      return dayjs().month(month).format(format)
}