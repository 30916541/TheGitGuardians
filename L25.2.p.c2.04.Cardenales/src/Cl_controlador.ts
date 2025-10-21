import Cl_mEquipo from "./Cl_mEquipo.js";
import Cl_mJugador from "./Cl_mJugador.js";
import Cl_mCriollo from "./Cl_mCriollo.js";
import Cl_mImportado from "./Cl_mImportado.js";
import Cl_vEquipo from "./Cl_vEquipo.js";
import type { iCriollo } from "./Cl_vCriollo.js";
import type { iImportado } from "./Cl_vImportado.js";

export default class Cl_controlador {
    public modelo: Cl_mEquipo;
    public vista: Cl_vEquipo;
    
    constructor(modelo: Cl_mEquipo, vista: Cl_vEquipo) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarCriollo(data: iCriollo) {
        const mCriollo = new Cl_mCriollo({
            numeroIdentificacion: data.numeroIdentificacion,
            bateos: data.bateos,
            vecesAlBate: data.vecesAlBate,
            mensualidad: data.mensualidad,
        });
        this.modelo.procesarJugador(mCriollo);
        this.reportarJugador({mJugador : mCriollo});
    }

    procesarImportado(data: iImportado) {
        const mImportado = new Cl_mImportado({
            numeroIdentificacion: data.numeroIdentificacion,
            bateos: data.bateos,
            vecesAlBate: data.vecesAlBate,
            anualidad: data.anualidad,
        });
        this.modelo.procesarJugador(mImportado);
        this.reportarJugador({mJugador : mImportado});
    }

    reportarJugador({mJugador} : {mJugador: Cl_mJugador}) {
        this.vista.reportarJugador({
            dataJugadores: mJugador.toJSON(),
            promedioMensualImportado: this.modelo.promedioMensualImportado(),
        });
        this.vista.show();
    }
}