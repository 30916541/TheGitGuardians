import Cl_mFigura from "./Cl_mFigura.js";
export default class Cl_mCirculo extends Cl_mFigura {
    _radio = 0;
    constructor({ coorX, coorY, radio, }) {
        super({ coorX, coorY });
        this._radio = radio;
    }
    set radio(radio) {
        this._radio = radio;
    }
    get radio() {
        return this._radio;
    }
    area() {
        return Math.PI * this._radio ** 2;
    }
    perimetro() {
        return 2 * Math.PI * this._radio;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            radio: this._radio
        };
    }
}
