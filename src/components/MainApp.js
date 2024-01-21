// MainApp.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import ContactUs from './Contact';
import About from './About';
import '../css/Header.css'; // Import the CSS file for styling
// import '../css/Footer.css'; // Import the CSS file for styling
const MainApp = () => {
    return (
        <Router>
            <div>
                {/* Header */}
                <header>
                    <div className="header-title">Portfolio</div>
                    <nav>
                        <ul className="header-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/education">Education</Link>
                            </li>
                            
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/achievements">Achievements</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <hr />

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>

                {/* Footer
                <footer>
                    <div className="footer-content">This is the footer.</div>
                </footer> */}
            </div>
        </Router>
    );
};

export default MainApp;
