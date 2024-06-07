import { useCallback } from 'react';

const useSmoothScroll = () => {
  const smoothScroll = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return smoothScroll;
};

export default useSmoothScroll;
