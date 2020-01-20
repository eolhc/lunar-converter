import { useState, useEffect } from 'react';
import { getCenter } from '../utils';

export default function usePositioner(
  elementRef: React.RefObject<HTMLDivElement>,
  dependent?: string | null
): { top: number; left: number } {
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  useEffect(() => {
    if (!elementRef || !elementRef.current) return;
    const optionWrapper = elementRef.current;
    const optionWrapperEl = optionWrapper.getBoundingClientRect();
    const { width, height } = optionWrapperEl;
    const { top, left } = getCenter(width, height);
    setLeft(left);
    setTop(top);
  }, [elementRef, dependent]);

  return { left, top };
}
