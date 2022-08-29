import logo from "./ollie.png";
import git from "./git.ico";
import twitter from "./twitter.ico";
import "./fonts/inter.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ollie The Dev</h1>
        <a className="App-link" href="https://blog.olliecodes.com">
          <b>Blog</b>
        </a>
        <a className="App-link" href="https://blog.olliecodes.com/portfolio">
          <b>Portfolio</b>
        </a>
        <a className="App-link" href="https://blog.olliecodes.com/experiments">
          <b>Experiments</b>
        </a>
        <div className='App-home-row'>
          <a className="App-social-link" target="_blank" rel="noreferrer" href="https://github.com/olliethedev">
            <img src={git} alt="github" />
          </a>
          <a className="App-social-link" target="_blank" rel="noreferrer" href="https://twitter.com/olliethedev">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
