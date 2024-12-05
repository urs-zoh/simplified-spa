// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ManageProducts from './pages/ManageProducts';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Import global CSS
import './styles.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin/products" element={<ManageProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer>
        <p>&copy; 2024 Product Management App</p>
      </footer>
    </Router>
  );
};

export default App;