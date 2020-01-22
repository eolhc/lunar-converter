import { CONVERSION_OPTIONS } from '../config';

const getCenter = (
  width: number,
  height: number
): { top: number; left: number } => {
  const halfWidth = width ? width / 2 : 0;
  const halfHeight = height ? height / 2 : 0;
  const left = window.innerWidth / 2 - halfWidth;
  const top = window.innerHeight / 2 - halfHeight;
  return { top, left };
};

function debounce(callback: any, wait?: number, immediate = false) {
  let timeout: number | null = null;

  return function() {
    const callNow = immediate && !timeout;
    // @ts-ignore
    const next = () => callback.apply(this, arguments);

    timeout && clearTimeout(timeout);
    timeout = setTimeout(next, wait);

    if (callNow) {
      next();
    }
  };
}

const getConversionOptionsLabel = (type: string) => {
  const option = CONVERSION_OPTIONS.find(co => co.type === type);
  return option && option.label;
};

export { getCenter, debounce, getConversionOptionsLabel };
