import React from 'react';
import colorPieza from './functions';

export default function ModeloPieza({ modelo }) {
    return (
        <div className='figura' style={{ padding: '10px' }}>
            {modelo.map((fila, i) => (
                <div style={{ display: 'flex' }}>
                    {fila.map((numero, y) => (
                        <div className={`casilla ${colorPieza(numero)}`}>
                            {numero}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
