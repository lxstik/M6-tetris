import React from 'react';
import '../index.css';
import fondo from '../imgs/fondo.jpg';
import logo from '../imgs/logo.png';
import Panel from '../lib/panel.jsx';
import modelos from '../lib/modelos';
import Modelo from '../lib/panel.jsx';
import nuevaPieza from '../lib/nuevaPieza.js';

export default function Juego() {
    const [piezaActual, setPiezaActual] = useState(null);

    useEffect(() => {
        const columnaAleatoria = Math.floor(Math.random() * 12);
        const nueva = nuevaPieza(0, columnaAleatoria);
        setPiezaActual(nueva);
    }, []);
    
    nuevaPieza(); 
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
                <Panel modelo={modelos.matriz} />
                <div className='row'>
                    <div className='col'>
                        <Modelo modelo={modelos.piezas[0].matriz[0]} />
                    </div>
                    <div className="col">
                        <Modelo modelo={modelos.piezas[1].matriz[0]} />
                    </div>
                    <div className="col">
                        <Modelo modelo={modelos.piezas[2].matriz[0]} />
                    </div>
                    <div className="col">
                        <Modelo modelo={modelos.piezas[3].matriz[0]}/>
                    </div>

                    <div className="col">
                        <Modelo modelo={modelos.piezas[4].matriz[0]}/>
                    </div>

                    <div className="col">
                        <Modelo modelo={modelos.piezas[5].matriz[0]}/>
                    </div>
                    
                </div>
                
                <button className='btn btn-primary' style={{ marginTop: '20px' }}>Insertar Pieza</button>
                
            </div>
        </>
    );
}
