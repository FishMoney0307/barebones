import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Hero from './Hero.js';
import Body from './Body.js';

function App() {
  return (
    <div style={{backgroundColor: "#3b0a04"}}>
      <Hero/>
      <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and NEVER save to reload.
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
  */}
        <Body />
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
