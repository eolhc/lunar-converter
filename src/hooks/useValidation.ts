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
      return num > currentYear || isNaN(num);
    default:
      return false;
  }
};

function useValidation(birthday: { day: string; month: string; year: string }) {
  const [validationText, setValidationText] = useState<string | null>(null);

  useEffect(() => {
    if (!birthday) return;
    const dateTypes = Object.keys(birthday);
    let invalidTypes: string[] = [];
    dateTypes.map(d => {
      // @ts-ignore
      if (birthday[d] && isInvalid(d, birthday[d])) {
        invalidTypes.push(d);
      }
    });
    if (invalidTypes.length > 0) {
      const updatedText = `Invalid ${invalidTypes.join(', ')}`;
      setValidationText(updatedText);
    } else {
      setValidationText(null);
    }
  }, [birthday]);

  return validationText;
}

export default useValidation;
