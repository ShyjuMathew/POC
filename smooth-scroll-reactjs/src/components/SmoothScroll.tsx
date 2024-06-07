import React from 'react';
import useSmoothScroll from '../hooks/useSmoothScroll';
import './SmoothScroll.css';

const SmoothScroll: React.FC = () => {
  const smoothScroll = useSmoothScroll();

  const handleScroll = (elementId: string) => () => {
    smoothScroll(elementId);
  };

  return (
    <div>
      <button onClick={handleScroll('section1')}>Scroll to Section 1</button>
      <button onClick={handleScroll('section2')}>Scroll to Section 2</button>
      <button onClick={handleScroll('section3')}>Scroll to Section 3</button>
      
      <div id="section1" className="scroll-section">
        <h2>Section 1</h2>
      </div>
      <div id="section2" className="scroll-section">
        <h2>Section 2</h2>
      </div>
      <div id="section3" className="scroll-section">
        <h2>Section 3</h2>
      </div>
    </div>
  );
};

export default SmoothScroll;
