// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Welcome to the Product Management SPA</h2>
            <p>This is a simple SPA that allows you to view, add, edit, and delete products. Explore the app using the navigation menu.</p>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Home;