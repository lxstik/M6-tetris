import modeloPieza from "./modeloPieza";

export default function nuevaPieza(fila, columna) {
    const pieza = new modeloPieza();
    pieza.fila = fila;
    pieza.columna = columna;
    

    console.log(pieza.numero);
    console.log(pieza.nombre);
    console.log(pieza.angulo);
    console.log(pieza.matriz);
    pieza.girar();
    console.log(pieza.angulo);
    console.log(pieza.matriz);

    return pieza;
}