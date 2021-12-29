import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>
        <nav className="nav-bar">

          <img src='C:\Users\chels\menon-amira-product\src\images/amira-logo.PNG' className="nav-logo" width="40px"></img>
          <h2 className="nav-review"> Review Activity</h2>
          <h2 className="nav-report"> Report</h2>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p margin="0px">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
