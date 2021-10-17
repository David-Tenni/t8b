import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wowsers
        </p>
        
      </header>
      <button onclick="myFortune()">Fortune</button>
    </div>
  );
}

export default App;
