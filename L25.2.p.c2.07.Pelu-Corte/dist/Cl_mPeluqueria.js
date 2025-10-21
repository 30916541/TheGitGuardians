// import Cl_mCabelloCorto from "./Cl_mCabelloCorto.js";
// import Cl_mCabelloLargo from "./Cl_mCabelloLargo.js";
export default class Cl_mPeluqueria {
    constructor() {
        this.auxMayorMontoPagado = 0;
    }
    procesarCliente(cliente) {
        if (cliente.montoPagar() > this.auxMayorMontoPagado)
            this.auxMayorMontoPagado = cliente.montoPagar();
    }
    mayorMontoPagado() {
        return this.auxMayorMontoPagado;
    }
}
