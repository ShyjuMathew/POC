import { useState } from 'react';

const useAccordions = (allowMultiple: boolean) => {
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((accordionId) => accordionId !== id) : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };

  const isOpen = (id: string) => openAccordions.includes(id);

  return { toggleAccordion, isOpen };
};

export default useAccordions;
