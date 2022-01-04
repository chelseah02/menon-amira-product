import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import RunningRecord from './RunningRecord';
import Story from './Story';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App" margin="0">
      <header exact className="App-header" margin="0">
        <NavBar />
        <RunningRecord />
      </header>
    </div>
  );
}

export default App;


        {
          /* EXTRA CODE FOR REFERENCE <img src={logo} className="App-logo" alt="logo"/>
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
        </a> */}