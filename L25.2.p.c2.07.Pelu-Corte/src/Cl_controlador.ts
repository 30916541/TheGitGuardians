import Cl_mPeluqueria from "./Cl_mPeluqueria.js";
import Cl_mCliente from "./Cl_mCliente.js";
import Cl_mCabelloCorto from "./Cl_mCabelloCorto.js";
import Cl_mCabelloLargo from "./Cl_mCabelloLargo.js";
import Cl_vPeluqueria from "./Cl_vPeluqueria.js";
import type { iCabelloCorto } from "./Cl_vCabelloCorto.js";
import type { iCabelloLargo } from "./Cl_vCabelloLargo.js";

export default class Cl_controlador {
    public modelo: Cl_mPeluqueria;
    public vista: Cl_vPeluqueria;

    constructor(modelo: Cl_mPeluqueria, vista: Cl_vPeluqueria) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarCabelloCorto(data: iCabelloCorto) {
        const mCabelloCorto = new Cl_mCabelloCorto({
            cedula: data.cedula,
            servicio: data.servicio,
            extension: data.extension,
        });
        this.modelo.procesarCliente(mCabelloCorto);
        this.reportarCliente({mCliente : mCabelloCorto});
    }

    procesarCabelloLargo(data: iCabelloLargo) {
        const mCabelloLargo = new Cl_mCabelloLargo({
            cedula: data.cedula,
            servicio: data.servicio,
            permanente: data.permanente,
        });
        this.modelo.procesarCliente(mCabelloLargo);
        this.reportarCliente({mCliente : mCabelloLargo});
    }

    reportarCliente({mCliente}: { mCliente: Cl_mCliente }) {
        this.vista.reportarCliente({
            dataClientes: mCliente.toJSON(),
            mayorMontoPagado: this.modelo.mayorMontoPagado(),
        });
        this.vista.show();
    }
}