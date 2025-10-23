export default class Cl_mFigura {
    _coorX = 0;
    _coorY = 0;
    constructor({ coorX, coorY, }) {
        this._coorX = coorX;
        this._coorY = coorY;
    }
    set coorX(coorX) {
        this._coorX = coorX;
    }
    get coorX() {
        return this._coorX;
    }
    set coorY(coorY) {
        this._coorY = coorY;
    }
    get coorY() {
        return this._coorY;
    }
    area() {
        return 0;
    }
    perimetro() {
        return 0;
    }
    toJSON() {
        return {
            coorX: this._coorX,
            coorY: this._coorY,
            area: this.area(),
            perimetro: this.perimetro()
        };
    }
}
