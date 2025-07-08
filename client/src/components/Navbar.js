import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🍽️ FeedPlanner
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/sobre" 
              className={`nav-link ${location.pathname === '/sobre' ? 'active' : ''}`}
            >
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/cadastro" 
              className={`nav-link ${location.pathname === '/cadastro' ? 'active' : ''}`}
            >
              Cadastro
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/planner" 
              className={`nav-link ${location.pathname === '/planner' ? 'active' : ''}`}
            >
              Meu Planner
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/nutricionistas" 
              className={`nav-link ${location.pathname === '/nutricionistas' ? 'active' : ''}`}
            >
              Nutricionistas
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/plus" 
              className={`nav-link ${location.pathname === '/plus' ? 'active' : ''}`}
            >
              Plus
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/login" 
              className={`nav-link login-btn ${location.pathname === '/login' ? 'active' : ''}`}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
