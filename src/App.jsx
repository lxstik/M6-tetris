// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './vistas/Inicio';
import Juego from './vistas/Juego';
import Partidas from './vistas/Partidas';
import Ranking from './vistas/Ranking';

export default function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100 p-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Tetris</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Juego">Juego</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Partidas">Partidas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Ranking">Ranking</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-4" style={{ padding: 0 }}>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/Juego" element={<Juego />} />
                    <Route path="/Partidas" element={<Partidas />} />
                    <Route path="/Ranking" element={<Ranking />} />
                </Routes>
            </div>
        </Router>
    );
}
