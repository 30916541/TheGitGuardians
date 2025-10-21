import Cl_vJugador from "./Cl_vJugador.js";
export default class Cl_vCriollo extends Cl_vJugador {
    divInMensualidad;
    inMensualidad;
    btAceptar;
    constructor() {
        super();
        this.divInMensualidad = this.crearHTMLElement({ elementName: "divInMensualidad" });
        this.inMensualidad = this.crearHTMLInputElement({ elementName: "inMensualidad" });
        this.btAceptar = this.crearHTMLButtonElement({ elementName: "btAceptarCriollo", onclick: () => this.controlador?.procesarCriollo({
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
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Criollo" });
        this.inMensualidad.value = "";
        this.divInMensualidad.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
