
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Belajar Route</h1>
        <nav>
          <Link to="/home" className='Mr'>Home</Link>
          <Link to="/about" className='Mr'>About</Link>
          <Link to="/category" className='Mr'>Katalog 1</Link>
          <Link to="/Katalog" className='Mr'>Katalog 2</Link>
        </nav>
    </div>
  );
}

export default App;
