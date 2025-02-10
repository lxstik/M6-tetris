import modelos from './modelos';

export function colorPieza(numero) {
    const colores = [
        'cuadradito color0', 
        'cuadradito color1', 
        'cuadradito color2', 
        'cuadradito color3', 
        'cuadradito color4', 
        'cuadradito color5', 
        'cuadradito color6', 
        'cuadradito color7'
    ];
    return colores[numero];
}

export function pintarPieza(panel, piezaActual) {
    if (!piezaActual) return panel;

    const nuevoPanel = panel.map(fila => fila.slice());
    const { matriz, fila, columna } = piezaActual;

    matriz.forEach((filaPieza, i) => {
        filaPieza.forEach((valor, j) => {
            const nuevaFila = fila + i;
            const nuevaColumna = columna + j;
            if (nuevaFila >= 0 && nuevaFila < nuevoPanel.length && nuevaColumna >= 0 && nuevaColumna < nuevoPanel[0].length) {
                nuevoPanel[nuevaFila][nuevaColumna] = valor;
            }
        });
    });

    return nuevoPanel;
}

export function insertarNuevaPieza(panel, nuevaPieza) {
    return pintarPieza(panel, nuevaPieza);
}