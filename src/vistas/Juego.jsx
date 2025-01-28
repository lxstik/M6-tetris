import React from 'react';
import fondo from '../imgs/fondo.jpg';
import logo from '../imgs/logo.png';
import modelos from '../lib/modelos.js';

export default function Juego() {
    return (
        <>
            <style>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                        overflow: hidden;
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
                <div className='campo' style={{ padding: '10px' }}>
                    {modelos.matriz.map((item, fila) => (
                        <div style={{ display: 'flex' }} key={fila}>
                            {item.map((elemento, columna) => (
                                <p
                                    key={columna}
                                    style={{
                                        margin: '0',
                                        padding: '0',
                                        border: '1px solid #ccc',
                                        width: '25px',
                                        height: '25px',
                                        textAlign: 'center',
                                        lineHeight: '25px',
                                        backgroundColor: elemento === 1 ? '#333' : 'white',
                                        color: elemento === 1 ? 'white' : 'black',
                                    }}
                                >
                                    {elemento}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
