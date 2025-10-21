import Cl_vJugador from "./Cl_vJugador.js";

interface iImportado {
    numeroIdentificacion: number;
    bateos: number;
    vecesAlBate: number;
    anualidad: number;
}

export default class Cl_vImportado extends Cl_vJugador {
    private divInAnualidad: HTMLElement;
    private inAnualidad: HTMLInputElement;
    private btAceptar: HTMLButtonElement;

    constructor() {
        super();
        this.divInAnualidad = this.crearHTMLElement({elementName : "divInAnualidad"});
        this.inAnualidad = this.crearHTMLInputElement({elementName : "inAnualidad"});
        this.btAceptar = this.crearHTMLButtonElement({
            elementName : "btAceptarImportado", 
            onclick: () => this.controlador ?.procesarImportado({
                numeroIdentificacion: this.numeroIdentificacion,
                bateos: this.bateos,
                vecesAlBate: this.vecesAlBate,
                anualidad: this.anualidad,
            })
        });
    }

    get anualidad(): number {
        return +this.inAnualidad.value;
    }

    show({ ver = true }: { ver?: boolean } = { ver: true }) {
        super.show({ ver, nombreTipo: "Importado" });
        this.inAnualidad.value = "";
        this.divInAnualidad.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
export type { iImportado };