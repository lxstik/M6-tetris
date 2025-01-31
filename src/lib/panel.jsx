import React from 'react';

export default function Panel({ modelo }){
    return (
        <div className='campo' style={{ padding: '10px' }}>
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
                                backgroundColor: cuadrado === 1 ? '#333' : 'white',
                                color: cuadrado === 1 ? 'white' : 'black',
                            }}
                        >
                            {cuadrado}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

