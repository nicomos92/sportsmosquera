import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemListContainer from './container/ItemListContainer'; 


function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <ItemListContainer greeting="50% OFF en Futbol" titulo="Articulos"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
