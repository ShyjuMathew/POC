import React from 'react';
import useScreenSize from '../../hooks/useScreenSize';

const ScreenSizeComponent: React.FC = () => {
  const { width, height, deviceType } = useScreenSize();

  return (
    <div>
      <h1>Screen Size</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
      <p>Device Type: {deviceType}</p>
    </div>
  );
};

export default ScreenSizeComponent;
