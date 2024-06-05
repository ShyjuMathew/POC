import React from 'react';
import useAccordion from '../../hooks/useAccordion';
import './Accordion.css';

const Accordion = ({ title, children }) => {
  const { isOpen, toggle } = useAccordion();

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggle}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
