import logo from "./ollie.png";
import git from "./github.ico";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ollie Codes</h1>
        <a className="App-link" href="https://blog.olliecodes.com">
          <b>Blog</b>
        </a>
        <a className="App-link" href="https://blog.olliecodes.com/portfolio">
          <b>Portfolio</b>
        </a>
        <a className="App-link" href="https://github.com/olliethedev">
          <img src={git} alt="github" />
        </a>
      </header>
    </div>
  );
}

export default App;
