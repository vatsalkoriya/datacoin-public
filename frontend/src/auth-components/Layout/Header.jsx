import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
    window.location.reload();
  };

  const toggleMenu = () => {
    document.querySelector('.nav-links').classList.toggle('open');
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="logo">Auth</Link>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          
          {userInfo ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              {/* --- START OF FIX --- */}
              {/* Check for role instead of isAdmin */}
              {userInfo.role === 'admin' && (
                <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
              )}
              {/* --- END OF FIX --- */}
              <li>
                <button onClick={logoutHandler} className="btn-logout">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;