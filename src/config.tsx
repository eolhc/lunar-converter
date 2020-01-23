type ConversionOption = {
  label: string;
  type: string;
};

export const CONVERSION_OPTIONS: ConversionOption[] = [
  {
    label: 'Chinese New Year',
    type: 'cny'
  },
  {
    label: 'Your Lunar Birthday',
    type: 'birthday'
  },
  {
    label: 'Qing Ming',
    type: 'qingMing'
  }
];

export const MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const DAYS: string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
