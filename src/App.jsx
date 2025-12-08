import './App.css';
import Home from './pages/Home';
import { Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home / >} />
      <Route path="/" element={<Braze / >} />
    </Routes>
  );
}

export default App;
