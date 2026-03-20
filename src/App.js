import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/TODW-PUCPR">
      <div className="App">
        <nav className="app-nav">
          <NavLink to="/" end>Calculadora</NavLink>
          <NavLink to="/contador">Contador</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/contador" element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
