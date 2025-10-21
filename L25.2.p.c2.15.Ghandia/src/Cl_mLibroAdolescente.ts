import Cl_mLibro from "./Cl_mLibro.js";

export default class Cl_mLibroAdolescente extends Cl_mLibro {
    private _saga: string = "";

    constructor({
        codigo,
        precio,
        saga,
    }: {
        codigo: string;
        precio: number;
        saga: string;
    }) {
        super({ codigo, precio });
        this.saga = saga;
    }

    set saga(saga: string) {
        this._saga = saga;
    }

    get saga(): string {
        return this._saga;
    }

    incremento(): number {
        return (this.saga.toLowerCase() === "si") ? this.precio * 0.20 : 0;
    }

    precioPagar(): number {
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

