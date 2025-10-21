import Cl_mJugador from './Cl_mJugador.js';
export default class Cl_mImportado extends Cl_mJugador {
    _anualidad = 0;
    constructor({ numeroIdentificacion, bateos, vecesAlBate, anualidad, }) {
        super({ numeroIdentificacion, bateos, vecesAlBate });
        this._anualidad = anualidad;
    }
    set anualidad(anualidad) {
        this._anualidad = +anualidad;
    }
    get anualidad() {
        return this._anualidad;
    }
    average() {
        return (this.bateos / this.vecesAlBate) * 1000;
    }
    mensualidadBase() {
        return this.anualidad / 12;
    }
    bonificacion() {
        return (this.average() * 2) * 10;
    }
    pagoMensual() {
        return this.mensualidadBase() + this.bonificacion();
    }
    toJSON() {
        return {
            ...super.toJSON(),
            anualidad: this.anualidad,
            mensualidadBase: this.mensualidadBase(),
            tipo: 'Importado',
        };
    }
}
