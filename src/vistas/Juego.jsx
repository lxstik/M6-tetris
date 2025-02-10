import React, { useState } from 'react';
import '../index.css';
import fondo from '../imgs/fondo.jpg';
import logo from '../imgs/logo.png';
import Panel from '../lib/panel.jsx';
import modelos from '../lib/modelos';
import nuevaPieza from '../lib/nuevaPieza.js';
import { insertarNuevaPieza } from '../lib/functions.jsx';

// Función para crear el panel
const crearPanel = (filas, columnas, modeloExistente = null) => {
    if (modeloExistente) {
        return modeloExistente.map(fila => [...fila]);
    }
    const panel = Array.from({ length: filas }, () => {
        return Array(columnas).fill(0);
    });
    return panel;
};

export default function Juego() {
    const [panel, setPanel] = useState(() => crearPanel(20, 12, modelos.matriz));

    const insertaNuevaPieza = () => {
        const columnaAleatoria = Math.floor(Math.random() * 12);
        const nueva = nuevaPieza(0, columnaAleatoria);
        const nuevoPanel = insertarNuevaPieza(panel, nueva);
        setPanel(nuevoPanel);
    };

    return (
        <>
            <style>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                        // overflow: hidden;
                    }
                `}
            </style>
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
                    textAlign: 'center'
                }}
            >
                <img src={logo} alt="Logo" style={{ marginBottom: '20px' }} />
                <Panel modelo={panel} />
                <button onClick={insertaNuevaPieza}>Insertar Nueva Pieza</button>
                <div className='row'>
                    <div className='col'>
                        <Panel modelo={modelos.piezas[0].matriz[0]} />
                    </div>
                    <div className="col">
                        <Panel modelo={modelos.piezas[1].matriz[0]} />
                    </div>
                    <div className="col">
                        <Panel modelo={modelos.piezas[2].matriz[0]} />
                    </div>
                    <div className="col">
                        <Panel modelo={modelos.piezas[3].matriz[0]}/>
                    </div>
                    <div className="col">
                        <Panel modelo={modelos.piezas[4].matriz[0]}/>
                    </div>
                    <div className="col">
                        <Panel modelo={modelos.piezas[5].matriz[0]}/>
                    </div>
                </div>
            </div>
        </>
    );
}