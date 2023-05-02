import logo from './logo.svg';
import './App.css';
import Home from './pages/Homepage';
import ColorSchemesExample from './components/Navbar';
function App() {
  return (
    <>
    <ColorSchemesExample/>
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
    </>
  );
}

export default App;
