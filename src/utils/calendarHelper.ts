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

const getCurrentYearConversion = (birthday: any) => {
  let cal = new CalendarChinese();
  let newYear = cal.newYear(2020);
  cal.fromJDE(newYear);
  let cdate = cal.get();

  const { day, month } = birthday;
  const currentYearChineseBirthday = [cdate[0], cdate[1], month, cdate[3], day];
  const currentYearWesternBirthday = getWesternDate(currentYearChineseBirthday);
  return currentYearWesternBirthday;
};

export { getWesternDate, getChineseDate, getCurrentYearConversion };
