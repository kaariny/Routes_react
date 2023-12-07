// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import App from './App';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
