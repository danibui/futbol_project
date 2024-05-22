import React, { useState } from 'react';
import './Navbar.css'; // Asegúrate de tener un archivo CSS con los estilos necesarios

const NavBar = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías la lógica de búsqueda
    console.log('Buscando:', search);
  };

  return (
    <nav className="navbar" style={{ background: '#000', color: '#fff' }}>
      <div className="logo" style={{ float: 'left' }}> {/* Aquí iría tu logo */} </div>
      <ul className="nav-links" style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {/* Agregar 'active' a la clase del enlace actual */}
        <li className="nav-item active" style={{ display: 'inline' }}><a href="#home" style={{ color: 'red' }}>HOME</a></li>
        <li className="nav-item" style={{ display: 'inline' }}><a href="#news">NEWS</a></li>
        <li className="nav-item" style={{ display: 'inline' }}><a href="#team">TEAM</a></li>
        <li className="nav-item" style={{ display: 'inline' }}><a href="#shopper">SHOPPER</a></li>
        <li className="nav-item" style={{ display: 'inline' }}><a href="#fans">FANS</a></li>
        <li className="nav-item" style={{ display: 'inline' }}><a href="#shop">SHOP</a></li>
        <li className="nav-item" style={{ display: 'inline' }}><a href="#purchases">PURCHASES</a></li>
      </ul>
      <div className="user-interactions" style={{ float: 'right' }}>
        <form onSubmit={handleSearchSubmit} style={{ display: 'inline' }}>
          <input
            type="text"
            placeholder="Search ..."
            value={search}
            onChange={handleSearchChange}
            style={{ color: '#000' }}
          />
          <button type="submit" style={{ color: '#fff', background: 'red' }}>Buscar</button>
        </form>
        <div className="contact-info" style={{ display: 'inline' }}>
          <span>contactostopclub.com</span>
          <span>+1325 53 86 42</span>
          <span>27 Orlando St Portland</span>
        </div>
        <div className="auth-links" style={{ display: 'inline' }}>
          <a href="#login">Login</a>
          <a href="#register">Register</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;