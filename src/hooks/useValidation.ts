import { useEffect, useState } from 'react';

const currentYear = new Date().getFullYear();

const isInvalid = (type: string, value: string) => {
  const num = parseInt(value, 10);
  switch (type) {
    case 'day':
      return num < 0 || num > 31 || isNaN(num);
    case 'month':
      return num < 0 || num > 12 || isNaN(num);
    case 'year':
      return num < 1000 || num > currentYear || isNaN(num);
    case 'cny':
      return num < 1900 || num > 2100 || isNaN(num);
    default:
      return false;
  }
};

function useValidation(date: {
  day?: string;
  month?: string;
  year?: string;
  cny?: string;
}) {
  const [validationText, setValidationText] = useState<string | null>(null);

  useEffect(() => {
    if (!date) return;
    const dateTypes = Object.keys(date);
    let invalidTypes: string[] = [];
    dateTypes.map(d => {
      // @ts-ignore
      if (date[d] && isInvalid(d, date[d])) {
        invalidTypes.push(d);
      }
    });
    if (invalidTypes.length > 0) {
      const updatedText = `Invalid ${invalidTypes.join(', ')}`;
      setValidationText(updatedText);
    } else {
      setValidationText(null);
    }
  }, [date]);

  return validationText;
}

export default useValidation;
