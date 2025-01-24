import React from 'react';

export function Tabla() {
    const partidas = [
        { id: 1, nick: 'ANDER', puntuacion: 10, fecha: '13 ABRIL 2023', avatar: 'img/avatar1.png' },
        { id: 2, nick: 'MARTA', puntuacion: 600, fecha: '13 FEBRERO 2023', avatar: 'img/avatar2.png' },
        { id: 3, nick: 'JUAN', puntuacion: 888, fecha: '1 ENERO 2023', avatar: 'img/avatar3.png' },
        { id: 4, nick: 'CARLA', puntuacion: 1255, fecha: '5 MARZO 2023', avatar: 'img/avatar4.png' },
        { id: 5, nick: 'PABLO', puntuacion: 300, fecha: '20 ENERO 2023', avatar: 'img/avatar5.png' },
    ];

    return (
        <>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Prototipo</title>

                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
                    crossOrigin="anonymous"
                />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=VT323&display=swap"
                    rel="stylesheet"
                />

                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
                />

                <link rel="stylesheet" href="style.css" />
            </head>
            <body className="text-light">
                <header className="d-flex align-items-center justify-content-center">
                    <img src="img/logo.png" alt="logo" width="200" className="mt-5" />
                </header>
                <main className="container mt-5 bg-opacity-50 bg-dark p-2">
                    <div id="intro" className="text-center p-5">
                        <p>Tetris és un videojoc de tipus trencaclosques. Fou inventat per l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984, mentre treballava a l'Acadèmia de Ciències de Moscou.</p>
                        <h2>Instruccions:</h2>
                        <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>
                        <p>Amb la fletxa avall pots girar la peça</p>
                        <p>'<strong>Ñ</strong>' per canviar la peça actual per la peça que està a punt de sortir (que pots veure a la columna de la dreta)</p>
                        <p>Al final de la partida podràs desar la teva puntuació, i veure el ranking de jugadors</p>
                        <button className="btn btn-success fs-1 mt-5">JUGAR</button>
                    </div>

                    <div id="info" className="">
                        <div id="partidas" className="m-5 p-5 bg-dark">
                            <h2 className="text-center text-light">Ranking</h2>
                            <table className="table table-dark align-middle">
                                <thead>
                                    <tr className="bg-dark">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {partidas.map((partida, index) => (
                                        <tr key={partida.id}>
                                            <td className="fs-2">{index + 1}</td>
                                            <td><img src={partida.avatar} alt="avatar" /></td>
                                            <td>{partida.nick}</td>
                                            <td>{partida.puntuacion}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div id="partidas" className="m-5 p-5 bg-dark">
                            <h2 className="text-center text-light">Partidas</h2>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Buscador"
                                    aria-label="Buscador"
                                    aria-describedby="button-addon2"
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    id="button-addon2"
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </div>
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <td></td>
                                        <td>Nick <i className="bi bi-arrow-up-square"></i></td>
                                        <td>Puntuación <i className="bi bi-arrow-up-square"></i></td>
                                        <td>Fecha <i className="bi bi-arrow-up-square"></i></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {partidas.map((partida) => (
                                        <tr key={partida.id}>
                                            <td><img src={partida.avatar} alt="avatar" /></td>
                                            <td>{partida.nick}</td>
                                            <td>{partida.puntuacion}</td>
                                            <td>{partida.fecha}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="juego" className="d-none">
                        <div className="row">
                            <div className="col-4 d-flex flex-column justify-content-end align-items-center p-5">
                                <h4>Nivel: <span>2</span></h4>
                                <h4>Tiempo: <span>5:22</span></h4>
                                <h4>Lineas: <span>2</span></h4>
                                <h4>Puntos: <span>211122</span></h4>
                            </div>

                            <div className="col-4 d-flex justify-content-center">
                                <div id="panel" className="p-5">
                                    <div className="fila d-flex justify-content-center">
                                        <div className="celda bg-dark border-secondary">x</div>
                                        <div className="celda bg-dark border-secondary">x</div>
                                        <div className="celda bg-dark border-secondary">x</div>
                                        <div className="celda bg-dark border-secondary">x</div>
                                        <div className="celda bg-dark border-secondary">x</div>
                                        <div className="celda bg-dark border-secondary">x</div>
                                        <div className="celda bg-dark border-secondary">x</div>
                                        <div className="celda bg-dark border-secondary">x</div>
                                        <div className="celda bg-dark border-secondary">x</div>
                                        <div className="celda bg-dark border-secondary">x</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 d-flex flex-column justify-content-start align-items-center p-5">
                                <div id="piezaSiguiente">
                                    <h4>Pieza siguiente:</h4>
                                    <div className="piezaSiguiente m-2">
                                        <div className="fila d-flex justify-content-center">
                                            <div className="celda bg-primary bg-gradient border-dark">x</div>
                                            <div className="celda bg-dark border-secondary">x</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div id="piezaGuardada">
                                        <h4>Pieza guardada:</h4>
                                        <div className="piezaGuardada">
                                            <div className="piezaSiguiente m-2">
                                                <div className="fila d-flex justify-content-center">
                                                    <div className="celda bg-warning bg-gradient border-dark">x</div>
                                                    <div className="celda bg-warning border-secondary">x</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <script src="main.js"></script>
            </body>
        </>
    );
}