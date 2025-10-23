import Cl_mCasaPrestamo from "./Cl_mCasaPrestamo.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_mComerciante from "./Cl_mComerciante.js";
import Cl_vCasaPrestamo from "./Cl_vCasaPrestamo.js";
import { comerciante } from "./_data.js";

export default class Cl_principal {
    private controlador: Cl_controlador;

    constructor() {
        const modelo = new Cl_mCasaPrestamo();
        const vista = new Cl_vCasaPrestamo();
        this.controlador = new Cl_controlador(modelo, vista);

        vista.controlador = this.controlador;

        this.iniciarData();
    }

    iniciarData() {

        this.controlador.procesarComerciante(new Cl_mComerciante(comerciante[0]));
        this.controlador.procesarComerciante(new Cl_mComerciante(comerciante[1]));
        this.controlador.procesarComerciante(new Cl_mComerciante(comerciante[2]));
        this.controlador.procesarComerciante(new Cl_mComerciante(comerciante[3]));
        this.controlador.procesarComerciante(new Cl_mComerciante(comerciante[4]));
    }
}