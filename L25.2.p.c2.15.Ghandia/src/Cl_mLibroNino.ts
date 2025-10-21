import Cl_mLibro from "./Cl_mLibro.js";

export default class Cl_mLibroNino extends Cl_mLibro {
    private _ilustrado: string = "";

    constructor({
        codigo,
        precio,
        ilustrado,
    }: {
        codigo: string;
        precio: number;
        ilustrado: string;
    }) {
        super({ codigo, precio });
        this.ilustrado = ilustrado;
    }

    set ilustrado(ilustrado: string) {
        this._ilustrado = ilustrado;
    }

    get ilustrado(): string {
        return this._ilustrado;
    }
    

    descuento(): number {
        return (this.ilustrado.toLowerCase() === "si") ? this.precio * 0.10 : 0;
    }

    precioPagar(): number {
        return this.precio - this.descuento();
    }

    toJSON() {
        return {
            ...super.toJSON(),
            ilustrado: this.ilustrado,
            descuento: this.descuento(),
            tipo: "Niño",
        };
    }
}