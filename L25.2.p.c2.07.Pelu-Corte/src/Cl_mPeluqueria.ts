import Cl_mCliente from "./Cl_mCliente.js";
// import Cl_mCabelloCorto from "./Cl_mCabelloCorto.js";
// import Cl_mCabelloLargo from "./Cl_mCabelloLargo.js";

export default class Cl_mPeluqueria {
    private auxMayorMontoPagado = 0;

    procesarCliente(cliente: Cl_mCliente) {
        if(cliente.montoPagar() > this.auxMayorMontoPagado)
            this.auxMayorMontoPagado = cliente.montoPagar();
    }

    mayorMontoPagado(): number {
        return this.auxMayorMontoPagado;
    }
}