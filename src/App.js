// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Page/Home';
import Legacy from './components/Page/Legacy';
import Models from './components/Page/Models';
import Heritage from './components/Page/Heritage';
import Contact from './components/Page/Contact';
import './styles/Global.css';
import './styles/PageTransitions.css';

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <div className="page-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/legacy" element={<Legacy />} />
                        <Route path="/models" element={<Models />} />
                        <Route path="/heritage" element={<Heritage />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
