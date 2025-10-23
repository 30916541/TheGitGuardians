import Cl_mProcesador from "./Cl_mProcesador.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vGeometria from "./Cl_vGeometria.js";
import { circulos } from "./_data.js";

export default class Cl_index {
    private controlador: Cl_controlador;

    constructor() {
        const vista = new Cl_vGeometria();
        const modelo = new Cl_mProcesador();
        this.controlador = new Cl_controlador(modelo, vista);
        vista.controlador = this.controlador;

        this.iniciarData();
    }

    iniciarData() {
        // this.controlador.procesarCirculo(circulos[0]);
        // this.controlador.procesarCirculo(circulos[1]);
        // this.controlador.procesarCirculo(circulos[2]);
        // this.controlador.procesarCirculo(circulos[3]);

        const c0 = circulos[0]; if (c0) this.controlador.procesarCirculo(c0);
        const c1 = circulos[1]; if (c1) this.controlador.procesarCirculo(c1);
        const c2 = circulos[2]; if (c2) this.controlador.procesarCirculo(c2);
        const c3 = circulos[3]; if (c3) this.controlador.procesarCirculo(c3);
    }
}
