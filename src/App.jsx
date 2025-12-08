import './App.css';
import Home from './pages/Home';
import Braze from '.pages/Braze'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Braze" element={<Braze />} />
    </Routes>
  );
}

export default App;
