const { CalendarChinese } = require('date-chinese');

const getChineseDate = (year: number, month: number, day: number) => {
  const calendar = new CalendarChinese();
  const chineseBirthday = calendar.fromGregorian(year, month, day);
  return chineseBirthday;
};

const getWesternDate = (chineseDate: any) => {
  const calendar = new CalendarChinese(chineseDate);
  return calendar.toGregorian();
};

export { getWesternDate, getChineseDate };
