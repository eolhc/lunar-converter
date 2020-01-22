import { useState, useEffect } from 'react';
import { getCenter, debounce } from '../utils';

export default function usePositioner(
  elementRef: React.RefObject<HTMLDivElement>,
  updateValue?: number
): { top: number; left: number } {
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  useEffect(() => {
    calculatePosition();
  }, [elementRef, updateValue]);

  useEffect(() => {
    window.addEventListener('resize', debouncedCalculatePosition);
    return () => {
      window.removeEventListener('resize', debouncedCalculatePosition);
    };
  });

  const calculatePosition = () => {
    if (!elementRef || !elementRef.current) return;
    const optionWrapper = elementRef.current;
    const optionWrapperEl = optionWrapper.getBoundingClientRect();
    const { width, height } = optionWrapperEl;
    const { top, left } = getCenter(width, height);
    setLeft(left);
    setTop(top);
  };

  const debouncedCalculatePosition = debounce(calculatePosition, 16);

  return { left, top };
}
