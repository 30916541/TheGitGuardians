import Cl_mEquipo from "./Cl_mEquipo.js";
import Cl_mJugador from "./Cl_mJugador.js";
import Cl_mCriollo from "./Cl_mCriollo.js";
import Cl_mImportado from "./Cl_mImportado.js";
import Cl_vEquipo from "./Cl_vEquipo.js";
export default class Cl_controlador {
    modelo;
    vista;
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarCriollo(data) {
        const mCriollo = new Cl_mCriollo({
            numeroIdentificacion: data.numeroIdentificacion,
            bateos: data.bateos,
            vecesAlBate: data.vecesAlBate,
            mensualidad: data.mensualidad,
        });
        this.modelo.procesarJugador(mCriollo);
        this.reportarJugador({ mJugador: mCriollo });
    }
    procesarImportado(data) {
        const mImportado = new Cl_mImportado({
            numeroIdentificacion: data.numeroIdentificacion,
            bateos: data.bateos,
            vecesAlBate: data.vecesAlBate,
            anualidad: data.anualidad,
        });
        this.modelo.procesarJugador(mImportado);
        this.reportarJugador({ mJugador: mImportado });
    }
    reportarJugador({ mJugador }) {
        this.vista.reportarJugador({
            dataJugadores: mJugador.toJSON(),
            promedioMensualImportado: this.modelo.promedioMensualImportado(),
        });
        this.vista.show();
    }
}
