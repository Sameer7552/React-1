import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.webp'

const Header = ({ darkMode, setDarkMode }) => (
  <header className="text-white py-3">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="d-flex align-items-center">
        <img
          src= {Logo}
          alt="Logo"
          className="rounded-circle my-spinner"
          style={{ width: '50px', height: '50px' }}
        />
      </div>

      <nav className="d-flex justify-content-center flex-grow-1">
        <Link to="/" className="text-white mx-3 h5 text-decoration-none">Home</Link>
        <Link to="/about" className="text-white mx-3 h5 text-decoration-none">About</Link>
        <Link to="/contact" className="text-white mx-3 h5 text-decoration-none">Contact</Link>
      </nav>

      <div className="d-flex align-items-center">
        <label className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(prevMode => !prevMode)}
          />
          <span className="form-check-label ms-2">Dark Mode</span>
        </label>
      </div>
    </div>
  </header>
);

export default Header;
