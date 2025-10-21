import Cl_mJugador from './Cl_mJugador.js';

export default class Cl_mImportado extends Cl_mJugador {
    private _anualidad: number = 0;

    constructor({
        numeroIdentificacion,
        bateos,
        vecesAlBate,
        anualidad,
    }: {
        numeroIdentificacion: number;
        bateos: number;
        vecesAlBate: number;
        anualidad: number;
    }) {
        super({ numeroIdentificacion, bateos, vecesAlBate });
        this._anualidad = anualidad;
    }

    set anualidad(anualidad: number) {
        this._anualidad = +anualidad;
    }

    get anualidad(): number {
        return this._anualidad;
    }

    average(): number {
        return (this.bateos / this.vecesAlBate) * 1000;
    }

    mensualidadBase(): number {
        return this.anualidad / 12;
    }

    bonificacion(): number {
        return (this.average() * 2) * 10;
    }

    pagoMensual(): number {
        return this.mensualidadBase() + this.bonificacion();
    }

    toJSON() {
        return {
            ...super.toJSON(),
            anualidad: this.anualidad,
            mensualidadBase: this.mensualidadBase(),
            tipo: 'Importado',
        }
    }



}