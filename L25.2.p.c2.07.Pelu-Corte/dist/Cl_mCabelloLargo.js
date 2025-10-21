import Cl_mCliente from "./Cl_mCliente.js";
export default class Cl_mCabelloLargo extends Cl_mCliente {
    constructor({ cedula, servicio, permanente, }) {
        super({ cedula, servicio });
        this._permanente = "";
        this.permanente = permanente;
    }
    set permanente(permanente) {
        this._permanente = permanente;
    }
    get permanente() {
        return this._permanente;
    }
    precio() {
        if (this.servicio === 1)
            return 35;
        else if (this.servicio === 2)
            return 50;
        else if (this.servicio === 3)
            return 75;
        else
            return 0;
    }
    precioPermanente() {
        if (this.permanente === "SI")
            return 300;
        else
            return 0;
    }
    descuento() {
        if (this.servicio === 3)
            return (this.precio() + this.precioPermanente()) * 20 / 100;
        else
            return 0;
    }
    montoPagar() {
        return this.precio() + this.precioPermanente() - this.descuento();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { permanente: this.permanente, precioPermanente: this.precioPermanente(), tipo: "Cabello Largo" });
    }
}
