const { CalendarChinese } = require('date-chinese');

const getChineseDate = (year: string, month: string, day: string) => {
  const calendar = new CalendarChinese();
  const chineseBirthday = calendar.fromGregorian(
    parseInt(year, 10),
    parseInt(month, 10),
    parseInt(day, 10)
  );
  return chineseBirthday;
};

const getWesternDate = (chineseDate: any) => {
  const calendar = new CalendarChinese(chineseDate);
  return calendar.toGregorian();
};

export { getWesternDate, getChineseDate };
