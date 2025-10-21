import Cl_vJugador from "./Cl_vJugador.js";

interface iCriollo {
    numeroIdentificacion: number;
    bateos: number;
    vecesAlBate: number;
    mensualidad: number;
}

export default class Cl_vCriollo extends Cl_vJugador {
    private divInMensualidad: HTMLElement;
    private inMensualidad: HTMLInputElement;
    private btAceptar: HTMLButtonElement;

    constructor() {
        super();
        this.divInMensualidad = this.crearHTMLElement({elementName : "divInMensualidad"});
        this.inMensualidad = this.crearHTMLInputElement({elementName : "inMensualidad"});
        this.btAceptar = this.crearHTMLButtonElement({elementName : "btAceptarCriollo", onclick: () => 
            this.controlador ?.procesarCriollo({
                numeroIdentificacion: this.numeroIdentificacion,
                bateos: this.bateos,
                vecesAlBate: this.vecesAlBate,
                mensualidad: this.mensualidad,
            })
        });
    }

    get mensualidad() {
        return +this.inMensualidad.value;
    }

    show({ ver = true }: { ver?: boolean } = { ver: true }) {
        super.show({ ver, nombreTipo: "Criollo" });
        this.inMensualidad.value = "";
        this.divInMensualidad.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
export type { iCriollo };