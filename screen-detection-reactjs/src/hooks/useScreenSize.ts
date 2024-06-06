import { useState, useEffect, useCallback } from 'react';

interface ScreenSize {
  width: number;
  height: number;
  deviceType: string;
}

const useScreenSize = (): ScreenSize => {
  const getSize = useCallback(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
    deviceType: getDeviceType(window.innerWidth)
  }),[]);

  const getDeviceType = (width: number) => {
    if (width < 576) return 'Mobile';
    if (width < 992) return 'Tablet';
    if (width < 1200) return 'Desktop';
    return 'Large Desktop';
  };

  const [screenSize, setScreenSize] = useState<ScreenSize>(getSize);

  useEffect(() => {
    const handleResize = () => setScreenSize(getSize);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize]);

  return screenSize;
};

export default useScreenSize;
