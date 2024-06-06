import useToggle from "../hooks/useToggle";
import "./ReadMoreReadLess.css";

interface PropsTypes {
  text: string;
  maxLength : number;
}
const ReadMoreReadLess = ({ text, maxLength }: PropsTypes) => {
  const [isExpanded, toggleIsExpanded] = useToggle(false);

  const displayedText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <div className="read-more-read-less">
      <p>{displayedText}</p>
      <button onClick={toggleIsExpanded}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreReadLess;
