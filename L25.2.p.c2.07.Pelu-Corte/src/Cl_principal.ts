import Cl_mPeluqueria from "./Cl_mPeluqueria.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vPeluqueria from "./Cl_vPeluqueria.js";
import Cl_mCabelloCorto from "./Cl_mCabelloCorto.js";
import Cl_mCabelloLargo from "./Cl_mCabelloLargo.js";
import { cabelloCorto, cabelloLargo } from "./_data.js";

export default class Cl_principal {
    private controlador: Cl_controlador;

    constructor() {
        const vista = new Cl_vPeluqueria();

        const modelo = new Cl_mPeluqueria();

        this.controlador = new Cl_controlador(modelo, vista);

        vista.controlador = this.controlador;

        this.iniciarData();
    }

    iniciarData() {

        this.controlador.procesarCabelloCorto(new Cl_mCabelloCorto (cabelloCorto[0]));
        this.controlador.procesarCabelloCorto(new Cl_mCabelloCorto (cabelloCorto[1]));
        this.controlador.procesarCabelloCorto(new Cl_mCabelloCorto (cabelloCorto[2]));
        this.controlador.procesarCabelloCorto(new Cl_mCabelloCorto (cabelloCorto[3]));
        this.controlador.procesarCabelloLargo(new Cl_mCabelloLargo (cabelloLargo[0]));
        this.controlador.procesarCabelloLargo(new Cl_mCabelloLargo (cabelloLargo[1]));
        this.controlador.procesarCabelloLargo(new Cl_mCabelloLargo (cabelloLargo[2]));
        this.controlador.procesarCabelloLargo(new Cl_mCabelloLargo (cabelloLargo[3]));
    }
}