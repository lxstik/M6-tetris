import React from 'react';
import { Link } from 'react-router-dom';
import fondo from '../imgs/fondo.jpg';
import logo from '../imgs/logo.png';

export default function Inicio() {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${fondo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    color: 'grey',
                }}
            >
                <img src={logo} alt="Logo" style={{ marginBottom: '20px' }} />
                <div className="p-5" style={{fontWeight: 'bold'}}>
                    <h1>TETRIS</h1>
                    <p>Tetris és un videojoc de tipus trencaclosques. Fou inventat per l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984, mentre treballava a l'Acadèmia de Ciències de Moscou.</p>
                    <h2>Instruccions:</h2>
                    <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>
                    <p>Amb la fletxa avall pots girar la peça</p>
                    <p>'<strong>Ñ</strong>' per canviar la peça actual per la peça que està a punt de sortir (que pots veure a la columna de la dreta)</p>
                    <p>Al final de la partida podràs desar la teva puntuació, i veure el ranking de jugadors</p>
                    <Link className="nav-link" to="/Juego">
                        <button className="btn btn-success fs-1 mt-5">JUGAR</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
