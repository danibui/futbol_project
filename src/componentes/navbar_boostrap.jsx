import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/images.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Buscando:', search);
  };

  return (
    <div>
      <div className="top-menu">
        <ul className="top-menu-links">
          <li className="top-menu-item"><a href="#option1">Buy Tickets</a></li>
          <li className="top-menu-item"><a href="#option2">Login</a></li>
          <li className="top-menu-item"><a href="#option3">Register</a></li>
          <li className="top-menu-item"><a href="#cart"><i className="fas fa-shopping-cart"></i></a></li>
        </ul>
      </div>

      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li className="nav-item active"><a href="#home">HOME</a></li>
          <li className="nav-item"><a href="#news">NEWS</a></li>
          <li className="nav-item"><a href="#team">TEAM</a></li>
          <li className="nav-item"><a href="#shopper">SHOPPER</a></li>
          <li className="nav-item"><a href="#fans">FANS</a></li>
          <li className="nav-item"><a href="#shop">SHOP</a></li>
          <li className="nav-item"><a href="#purchases">PURCHASES</a></li>
        </ul>
        <div className="user-interactions">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search ..."
              value={search}
              onChange={handleSearchChange}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
