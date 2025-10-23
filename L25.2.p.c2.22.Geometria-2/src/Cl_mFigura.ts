export default class Cl_mFigura {
    private _coorX: number = 0;
    private _coorY: number = 0;

    constructor({
        coorX,
        coorY,
    }: {
        coorX: number;
        coorY: number;
    }) {
        this._coorX = coorX;
        this._coorY = coorY;
    }

    set coorX(coorX: number) {
        this._coorX = coorX;
    }

    get coorX() {
        return this._coorX;
    }

    set coorY(coorY: number) {
        this._coorY = coorY;
    }

    get coorY() {
        return this._coorY;
    }

    area(): number {
        return 0;
    }

    perimetro(): number {
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