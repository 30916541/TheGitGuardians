import Cl_mJugador from './Cl_mJugador.js';

export default class Cl_mCriollo extends Cl_mJugador{
    private _mensualidad: number = 0;

    constructor({
        numeroIdentificacion,
        bateos,
        vecesAlBate,
        mensualidad,
    }: {
        numeroIdentificacion: number;
        bateos: number;
        vecesAlBate: number;
        mensualidad: number;
    }) {
        super({ numeroIdentificacion, bateos, vecesAlBate });
        this.mensualidad = mensualidad;
    }

    set mensualidad(mensualidad: number) {
        this._mensualidad = +mensualidad;
    }

    get mensualidad(): number {
        return this._mensualidad;
    }

    average(): number {
        return (this.bateos / this.vecesAlBate) * 1000;
    }

    bonificacion(): number {
        return this.average() * 5;
    }

    pagoMensual(): number {
        return this.mensualidad + this.bonificacion();
    }

    toJSON() {
        return {
        ... super.toJSON(),
        mensualidad: this.mensualidad,
        tipo: 'Criollo',
        };
    }
}