import Cl_mCabelloCorto from "./Cl_mCabelloCorto.js";
import Cl_mCabelloLargo from "./Cl_mCabelloLargo.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarCabelloCorto(data) {
        const mCabelloCorto = new Cl_mCabelloCorto({
            cedula: data.cedula,
            servicio: data.servicio,
            extension: data.extension,
        });
        this.modelo.procesarCliente(mCabelloCorto);
        this.reportarCliente({ mCliente: mCabelloCorto });
    }
    procesarCabelloLargo(data) {
        const mCabelloLargo = new Cl_mCabelloLargo({
            cedula: data.cedula,
            servicio: data.servicio,
            permanente: data.permanente,
        });
        this.modelo.procesarCliente(mCabelloLargo);
        this.reportarCliente({ mCliente: mCabelloLargo });
    }
    reportarCliente({ mCliente }) {
        this.vista.reportarCliente({
            dataClientes: mCliente.toJSON(),
            mayorMontoPagado: this.modelo.mayorMontoPagado(),
        });
        this.vista.show();
    }
}
