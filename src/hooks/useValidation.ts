import { useEffect, useState } from 'react';

const currentYear = new Date().getFullYear();

const isValid = (type: string, value: string) => {
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

function useValidation(type: string, value: any) {
  const [validationText, setValidationText] = useState<string | null>(null);

  useEffect(() => {
    if (!value) return;
    const updatedText = isValid(type.toLowerCase(), value)
      ? `${type} is invalid`
      : '';
    setValidationText(updatedText);
  }, [value]);

  return validationText;
}

export default useValidation;
