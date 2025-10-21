import Cl_mCliente from "./Cl_mCliente.js";

export default class Cl_mCabelloLargo extends Cl_mCliente {
    private _permanente: string = "";

    constructor({
        cedula,
        servicio,
        permanente,
    }: {
        cedula: string;
        servicio: number;
        permanente: string;
    }) {
        super({ cedula, servicio});
        this.permanente = permanente;
    }

    set permanente(permanente: string) {
        this._permanente = permanente;
    }

    get permanente() {
        return this._permanente;
    }

    precio(): number {
        if(this.servicio === 1)
            return 35;
        else if(this.servicio === 2) 
            return 50;
        else if(this.servicio === 3) 
            return 75;
        else
            return 0;
        }

    precioPermanente(): number {
        if(this.permanente === "SI")
            return 300;
        else 
            return 0;
    }

    descuento(): number {
        if(this.servicio === 3)
            return (this.precio() + this.precioPermanente()) * 20 / 100;
        else 
            return 0;
    }

    montoPagar(): number {
        return this.precio() + this.precioPermanente() - this.descuento();
    }

    toJSON() {
        return {
            ... super.toJSON(),
            permanente: this.permanente,
            precioPermanente: this.precioPermanente(),
            tipo: "Cabello Largo",
        };
    }
}