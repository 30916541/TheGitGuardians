import Cl_mLibro from "./Cl_mLibro.js";
export default class Cl_mLibroAdolescente extends Cl_mLibro {
    _saga = "";
    constructor({ codigo, precio, saga, }) {
        super({ codigo, precio });
        this.saga = saga;
    }
    set saga(saga) {
        this._saga = saga;
    }
    get saga() {
        return this._saga;
    }
    incremento() {
        return (this.saga.toLowerCase() === "si") ? this.precio * 0.20 : 0;
    }
    precioPagar() {
        return this.precio + this.incremento();
    }
    toJSON() {
        return {
            ...super.toJSON(),
            saga: this.saga,
            incremento: this.incremento(),
            tipo: "Adolescente",
        };
    }
}
