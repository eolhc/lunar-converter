const { CalendarChinese } = require('date-chinese');

const calendar = new CalendarChinese();

export const getDate = (year: string, month: string, day: string) => {
  const chineseBirthday = calendar.fromGregorian(
    parseInt(year, 10),
    parseInt(month, 10),
    parseInt(day, 10)
  );
  console.log(chineseBirthday);
};
