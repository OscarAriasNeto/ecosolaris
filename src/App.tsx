import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Calculator from './pages/Calculator';
import Team from './pages/Team';

const App: React.FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
