import { ReactNode } from "react";
import useAccordion from "../../hooks/useAccordion";
import "./Accordion.css";

interface PropsType {
  title : string;
  children : ReactNode
}

const Accordion = ({title, children} : PropsType) => {
  const { isOpen, toggle } = useAccordion();

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggle}>
        <h2>{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
