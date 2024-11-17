import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/calculator">Calculadora/Economia</Link></li>
        <li><Link to="/team">Equipe</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
