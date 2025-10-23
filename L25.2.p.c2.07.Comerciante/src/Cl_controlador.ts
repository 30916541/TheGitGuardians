import Cl_mCasaPrestamo from "./Cl_mCasaPrestamo.js";
import Cl_mPersona from "./Cl_mPersona.js";
import Cl_mComerciante from "./Cl_mComerciante.js";
import Cl_vCasaPrestamo from "./Cl_vCasaPrestamo.js";
import type { iComerciante } from "./Cl_vComerciante.js";

export default class Cl_controlador {
    public modelo: Cl_mCasaPrestamo;
    public vista: Cl_vCasaPrestamo;

    constructor(modelo: Cl_mCasaPrestamo, vista: Cl_vCasaPrestamo) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarComerciante(data: iComerciante): void {
        const mComerciante = new Cl_mComerciante({
            cedula: data.cedula,
            nombre: data.nombre,
            edad: data.edad,
            sexo: data.sexo,
            estadoCivil: data.estadoCivil,
        });
        this.modelo.procesarPersona(mComerciante);
        this.reportarPersonas({mPersona: mComerciante});
    }

    reportarPersonas({mPersona}: {mPersona: Cl_mPersona}): void {
        this.vista.reportarPersonas({
            dataPersonas: mPersona.toJSON(),
            creditosAprobados: this.modelo.creditosAprobados(),
            creditosNoAprobados: this.modelo.creditosNoAprobados(),
        });
        this.vista.show();
    }
}