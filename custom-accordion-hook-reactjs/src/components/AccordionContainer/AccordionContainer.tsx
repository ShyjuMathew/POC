import React from 'react';
import Accordion from '../Accordion/Accordion';
import useAccordions from '../../hooks/useAccordion';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionContainerProps {
  items: AccordionItem[];
  allowMultipleOpen: boolean;
}

const AccordionContainer: React.FC<AccordionContainerProps> = ({ items, allowMultipleOpen }) => {
  const { toggleAccordion, isOpen } = useAccordions(allowMultipleOpen);

  return (
    <div>
      {items.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          isOpen={isOpen(item.id)}
          onToggle={() => toggleAccordion(item.id)}
        >
          <p>{item.content}</p>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionContainer;
