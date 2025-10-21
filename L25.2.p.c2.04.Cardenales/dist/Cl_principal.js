import Cl_mEquipo from "./Cl_mEquipo.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vEquipo from "./Cl_vEquipo.js";
import { criollos, importados } from "./_data.js";
export default class Cl_principal {
    controlador;
    constructor() {
        const vista = new Cl_vEquipo();
        const modelo = new Cl_mEquipo();
        this.controlador = new Cl_controlador(modelo, vista);
        vista.controlador = this.controlador;
        this.iniciarData();
    }
    iniciarData() {
        // Inicializar cada entrada individualmente (verifica undefined)
        const c0 = criollos[0];
        if (c0)
            this.controlador.procesarCriollo(c0);
        const c1 = criollos[1];
        if (c1)
            this.controlador.procesarCriollo(c1);
        const c2 = criollos[2];
        if (c2)
            this.controlador.procesarCriollo(c2);
        const c3 = criollos[3];
        if (c3)
            this.controlador.procesarCriollo(c3);
        const i0 = importados[0];
        if (i0)
            this.controlador.procesarImportado(i0);
        const i1 = importados[1];
        if (i1)
            this.controlador.procesarImportado(i1);
        const i2 = importados[2];
        if (i2)
            this.controlador.procesarImportado(i2);
        const i3 = importados[3];
        if (i3)
            this.controlador.procesarImportado(i3);
    }
}
