import Cl_mLibro from "./Cl_mLibro.js";
export default class Cl_mLibroNino extends Cl_mLibro {
    _ilustrado = "";
    constructor({ codigo, precio, ilustrado, }) {
        super({ codigo, precio });
        this.ilustrado = ilustrado;
    }
    set ilustrado(ilustrado) {
        this._ilustrado = ilustrado;
    }
    get ilustrado() {
        return this._ilustrado;
    }
    descuento() {
        return (this.ilustrado.toLowerCase() === "si") ? this.precio * 0.10 : 0;
    }
    precioPagar() {
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
