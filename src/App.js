import logo from './logo.svg';
import './App.css';
import { Menu, HomePage, DriftPage, TimeAttackPage, ForzaPage } from './components/pages';
import { Routes, Route } from 'react-router';

export default function App() {
  return (
    <div className='block-app'>
      <Menu />
      <div className="page">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
}
