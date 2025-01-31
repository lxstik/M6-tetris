import React from 'react';

export default function ModeloPieza({ modelo }) {
    return (
        <div className='figura' style={{ padding: '10px' }}>
            {modelo.map((fila, i) => (
                <div style={{ display: 'flex' }}>
                    {fila.map((cuadrado, y) => (
                        <div
                            style={{
                                margin: '0',
                                padding: '0',
                                border: '1px solid #ccc',
                                width: '25px',
                                height: '25px',
                                textAlign: 'center',
                                lineHeight: '25px',
                            }}
                        >
                            {cuadrado}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
