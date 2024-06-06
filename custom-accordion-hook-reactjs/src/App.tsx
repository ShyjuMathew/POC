import "./App.css";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const dataList = [
    { id: 1, title: "Section 1", content: "This is the content for section1." },
    { id: 2, title: "Section 2", content: "This is the content for section2." },
    { id: 3, title: "Section 3", content: "This is the content for section3." },
  ];
  
  return (
    <div className="App">
      <h1>Accordion Example</h1>
      {dataList.map((item) => {
        return (
          <Accordion key={item.id} title={item.title}>
            <p>{item.content}</p>
          </Accordion>
        );
      })}
    </div>
  );
}

export default App;
