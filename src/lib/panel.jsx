import React from 'react';
import { colorPieza } from './functions';
import '../index.css';

export default function Panel({ modelo }) {
    return (
        <div className='campo' style={{ padding: '10px' }}>
            {modelo.map((fila, i) => (
                <div key={i} style={{ display: 'flex' }}>
                    {fila.map((numero, y) => (
                        <div key={y} className={`casilla ${colorPieza(numero)}`}>
                            {numero}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}