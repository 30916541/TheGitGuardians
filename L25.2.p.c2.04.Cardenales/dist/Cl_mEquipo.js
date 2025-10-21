import Cl_mJugador from "./Cl_mJugador.js";
// import Cl_mCriollo from "./Cl_mCriollo.js";
import Cl_mImportado from "./Cl_mImportado.js";
export default class Cl_mEquipo {
    cntJugadoresImportados = 0;
    acPagoMensualImportados = 0;
    constructor() {
        this.cntJugadoresImportados = 0;
        this.acPagoMensualImportados = 0;
    }
    procesarJugador(jugador) {
        if (jugador instanceof Cl_mImportado) {
            this.cntJugadoresImportados++;
            this.acPagoMensualImportados += jugador.pagoMensual();
        }
    }
    promedioMensualImportado() {
        return this.acPagoMensualImportados / this.cntJugadoresImportados;
    }
}
