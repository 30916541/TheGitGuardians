import Cl_mCliente from "./Cl_mCliente.js";

export default class Cl_mCabelloCorto extends Cl_mCliente {
    private _extension: string = "";

    constructor({
        cedula,
        servicio,
        extension,
    }: {
        cedula: string;
        servicio: number;
        extension: string;
    }) {
        super({ cedula, servicio});
        this.extension = extension;
    }

    set extension(extension: string) {
        this._extension = extension;
    }

    get extension() {
        return this._extension;
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

    precioExtension(): number {
        if(this.extension === "SI")
            return 500;
        else 
            return 0;
    }

    descuento(): number {
        if(this.servicio === 3)
            return (this.precio() + this.precioExtension()) * 20 / 100;
        else 
            return 0;
    }

    montoPagar(): number {
        return this.precio() + this.precioExtension() - this.descuento();
    }

    toJSON() {
        return {
            ... super.toJSON(),
            extension: this.extension,
            precioExtension: this.precioExtension(),
            tipo: "Cabello Corto",
        };
    }
}