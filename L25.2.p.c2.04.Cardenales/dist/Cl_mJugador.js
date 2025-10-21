export default class Cl_mJugador {
    _numeroIdentificacion = 0;
    _bateos = 0;
    _vecesAlBate = 0;
    constructor({ numeroIdentificacion, bateos, vecesAlBate, }) {
        this.numeroIdentificacion = numeroIdentificacion;
        this.bateos = bateos;
        this.vecesAlBate = vecesAlBate;
    }
    set numeroIdentificacion(numeroIdentificacion) {
        this._numeroIdentificacion = +numeroIdentificacion;
    }
    get numeroIdentificacion() {
        return this._numeroIdentificacion;
    }
    set bateos(bateos) {
        this._bateos = +bateos;
    }
    get bateos() {
        return this._bateos;
    }
    set vecesAlBate(vecesAlBate) {
        this._vecesAlBate = +vecesAlBate;
    }
    get vecesAlBate() {
        return this._vecesAlBate;
    }
    average() {
        return 0;
    }
    bonificacion() {
        return 0;
    }
    pagoMensual() {
        return 0;
    }
    toJSON() {
        return {
            numeroIdentificacion: this.numeroIdentificacion,
            bateos: this.bateos,
            vecesAlBate: this.vecesAlBate,
            average: this.average(),
            bonificacion: this.bonificacion(),
            pagoMensual: this.pagoMensual(),
        };
    }
}
