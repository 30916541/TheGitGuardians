import Cl_mJugador from './Cl_mJugador.js';
export default class Cl_mCriollo extends Cl_mJugador {
    _mensualidad = 0;
    constructor({ numeroIdentificacion, bateos, vecesAlBate, mensualidad, }) {
        super({ numeroIdentificacion, bateos, vecesAlBate });
        this.mensualidad = mensualidad;
    }
    set mensualidad(mensualidad) {
        this._mensualidad = +mensualidad;
    }
    get mensualidad() {
        return this._mensualidad;
    }
    average() {
        return (this.bateos / this.vecesAlBate) * 1000;
    }
    bonificacion() {
        return this.average() * 5;
    }
    pagoMensual() {
        return this.mensualidad + this.bonificacion();
    }
    toJSON() {
        return {
            ...super.toJSON(),
            mensualidad: this.mensualidad,
            tipo: 'Criollo',
        };
    }
}
