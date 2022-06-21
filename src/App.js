import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          visit the link below 
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank"  rel="noopener noreferrer" >
          To Learn React
        </a>
      </header>
      <p>Hello And Welcome</p>
    </div>
  );
}

export default App;
