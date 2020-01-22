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

const getChineseNewYear = (year: number) => {
  let cal = new CalendarChinese();
  let newYear = cal.newYear(year);
  const julian = require('astronomia').julian;
  let date = new julian.CalendarGregorian().fromJDE(newYear).toDate();
  return date;
};

const getQingMing = (year: number) => {
  let cal = new CalendarChinese();
  let qm = cal.qingming(year);
  cal.fromJDE(qm);
  return cal.toDate();
  // return cal.toGregorian();
  //> { year: 1985, month: 4, day: 5 }
};

export {
  getWesternDate,
  getChineseDate,
  getCurrentYearConversion,
  getChineseNewYear,
  getQingMing
};
