import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';

function App() {
  return (
    <div className="App" margin="0">
      <header className="App-header" margin="0">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" margin="0" />
        <p margin="0px">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          margin ="0"
        >
          Learn React
  </a> 
      </header>
    </div>
  );
}

export default App;
