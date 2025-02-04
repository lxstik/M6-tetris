import modeloPieza from "./modeloPieza"

export default function nuevaPieza() {

    console.log(modeloPieza.numero) // 1 (un numero aleatorio, en este caso corresponde a la segunda pieza de modelos.piezas)
    console.log(modeloPieza.nombre) // "L"
    console.log(modeloPieza.angulo) // 0
    console.log(modeloPieza.fila, modeloPieza.columna) // 0,1
    console.log(modeloPieza.matriz)  // [[2,0],[2,0],[2,2]]
    console.log(modeloPieza.girar()) // [[2,2,2],[2,0,0]]
}
