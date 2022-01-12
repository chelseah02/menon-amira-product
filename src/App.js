import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import RunningRecord from './RunningRecord';
import Story from './Story';
import Report from './Report';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header exact className="App-header">
        <NavBar />
        <Route exact path="/" component={Story} />
        <Route exact path="/record" component={RunningRecord} />
        <Route path="/report" component={Report} />
      </header>
    </div>
  );
}

export default App;

{/*
          <Route exact path="/" component={NavBar} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/record" component={RunningRecord} />
 */}
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