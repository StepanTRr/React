import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/header/Footer';


function App() {
  return (
   
    <div className="App">
       <Header></Header>
      <main className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
