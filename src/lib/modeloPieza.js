import modelos from "./modelos";

class modeloPieza {
    numero = Math.floor(Math.random() * 6);
    nombre = modelos.piezas[this.numero].nombre;
    angulo = 0;
    matriz = modelos.piezas[this.numero].matriz[this.angulo];

    girar() {
        if (this.angulo < 3) {
            this.angulo++;
        } else {
            this.angulo = 0;
        }
        this.matriz = modelos.piezas[this.numero].matriz[this.angulo];
    }
}

export default modeloPieza;