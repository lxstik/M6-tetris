import React from 'react';

export default function Ranking() {
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
            <body className="text-light w-100 m-0">
                <main className="d-flex justify-content-center align-items-center h-100 bg-dark" style={{ marginLeft: '750px', width: '300px' }}>
                    <div id="info" className="w-100">
                        <div id="partidas" className="d-flex justify-content-center m-0 p-5 bg-dark">
                            <div className="w-100">
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
                        </div>
                    </div>
                </main>
                <script src="main.js"></script>
            </body>
        </>
    );
}
