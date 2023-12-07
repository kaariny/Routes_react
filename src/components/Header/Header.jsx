// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import CartButton from '../CartButton/CartButton';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Produtos</Link></li>
            <li><Link to="/cart">Carrinho</Link></li>
            <li><Link to="/cadastro">Cadastro</Link></li> {/* Adicione o link para Cadastro */}
            <li><Link to="/login">Login</Link></li> {/* Adicione o link para Login */}
          </ul>
        </nav>
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
