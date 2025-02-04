class modeloPieza {
    numero = 1;
    nombre = "L";
    angulo = 0;
    matriz = [[2,0],[2,0],[2,2]];
    constructor(numero, nombre, angulo = 0, matriz){
        this.numero = numero;
        this.nombre = nombre;
        this.angulo = angulo;
        this.matriz = matriz;
    }

    girar() {
        if (this.angulo < 3) {
            this.angulo++;
        } else {
            this.angulo = 0;
        }
    }
}

export default modeloPieza;