import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';

import backgroundImage from './pattern.png';

function App() {
  return (
    <Router>
      <div className='App' style={{ background: `url(${backgroundImage})` }}>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/pokemon/:pokemonIndex' element={<Pokemon />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
