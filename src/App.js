import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand text-white " href="index.html">
            <img src={logo} alt="" width="30" height="24" className="App-logo d-inline-block align-text-top"/>
            A Tu Gusto
          </a>
        </div>
      </nav>
    </div>
  )
}

export default App;



