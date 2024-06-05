import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Data extracted from system variables</h1>
      <h2>Employee Information</h2>
      <ul>
        <li className='list-item'>
            <span>{process.env.REACT_APP_NAME}</span>
            <span>{process.env.REACT_APP_AGE}</span>
            <span>{process.env.REACT_APP_TECH_STACK}</span>
        </li>
      </ul>
    </div>
  );
}

export default App;
