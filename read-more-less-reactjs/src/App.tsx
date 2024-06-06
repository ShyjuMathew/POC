import "./App.css";
import ReadMoreReadLess from "./components/ReadMoreReadLess";

function App() {
  const longText =
    "This is a long text that will be truncated. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.";

  return (
    <div className="App">
      <h1>Read More / Read Less Example</h1>
      <ReadMoreReadLess text={longText} maxLength={100} />
    </div>
  );
}

export default App;
