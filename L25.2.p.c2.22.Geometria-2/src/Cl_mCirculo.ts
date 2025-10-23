import Cl_mFigura from "./Cl_mFigura.js";

export default class Cl_mCirculo extends Cl_mFigura {
    private _radio: number = 0;

    constructor({
        coorX,
        coorY,
        radio,
    }: {
        coorX: number;
        coorY: number;
        radio: number;
    }) {
        super({ coorX, coorY });
        this._radio = radio;
    }

    set radio(radio: number) {
        this._radio = radio;
    }

    get radio() {
        return this._radio;
    }

    area(): number {
        return Math.PI * this._radio ** 2;
    }

    perimetro(): number {
        return 2 * Math.PI * this._radio;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            radio: this._radio
        };
    }
}