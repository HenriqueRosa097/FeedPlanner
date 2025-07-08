import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Plus from './pages/Plus';
import Nutricionistas from './pages/Nutricionistas';
import Planner from './pages/Planner';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/plus" element={<Plus />} />
            <Route path="/nutricionistas" element={<Nutricionistas />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
