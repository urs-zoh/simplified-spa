// src/pages/About.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Team from './Team';
import Careers from './Careers';

const About = () => {
    return (
        <div>
            <h2>About Us</h2>
            <p>Learn more about our company and team.</p>
            <nav>
                <ul>
                    <li><Link to="/about/team">Team</Link></li>
                    <li><Link to="/about/careers">Careers</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="team" element={<Team />} />
                <Route path="careers" element={<Careers />} />
            </Routes>
        </div>
    );
};

export default About;