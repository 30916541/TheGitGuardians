export default class Cl_mJugador {
    public _numeroIdentificacion = 0;
    public _bateos = 0;
    public _vecesAlBate = 0;

    constructor({
        numeroIdentificacion, 
        bateos, 
        vecesAlBate,
    }: {
        numeroIdentificacion: number;
        bateos: number;
        vecesAlBate: number;
    }) {
        this.numeroIdentificacion = numeroIdentificacion;
        this.bateos = bateos;
        this.vecesAlBate = vecesAlBate;
    }

    set numeroIdentificacion(numeroIdentificacion: number) {
        this._numeroIdentificacion = +numeroIdentificacion;
    }

    get numeroIdentificacion() {
        return this._numeroIdentificacion;
    }

    set bateos(bateos: number) {
        this._bateos = +bateos;
    }

    get bateos() {
        return this._bateos;
    }

    set vecesAlBate(vecesAlBate: number) {
        this._vecesAlBate = +vecesAlBate;
    }

    get vecesAlBate() {
        return this._vecesAlBate;
    }

    average(): number {
        return 0;
    }

    bonificacion(): number {
        return 0;
    }

    pagoMensual(): number {
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