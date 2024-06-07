import React, { ReactNode } from 'react';
import './Accordion.css';

interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={onToggle}>
        <h2>{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
