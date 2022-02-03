import './styles/App.css';
import NavBar from './NavBar';
import RunningRecord from './RunningRecord';
import Story from './Story.js';
import Report from './Report';
import Team from './Team';
import Details from './Details';
import Footer from './Footer';
import {Route, Link} from 'react-router-dom';
import FrontPage from './FrontPage';

function App() {
  return (
    <div className="App">
      <header exact className="App-header">
        <NavBar />
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/story" component={Story} render={(props) => <Story {...props}/>}/>
        <Route exact path="/record" component={RunningRecord} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/details" component={Details}/>
        <Route exact path="/team" component={Team}/>
        <Footer />
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