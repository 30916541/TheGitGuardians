import Cl_vJugador from "./Cl_vJugador.js";
export default class Cl_vImportado extends Cl_vJugador {
    divInAnualidad;
    inAnualidad;
    btAceptar;
    constructor() {
        super();
        this.divInAnualidad = this.crearHTMLElement({ elementName: "divInAnualidad" });
        this.inAnualidad = this.crearHTMLInputElement({ elementName: "inAnualidad" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarImportado",
            onclick: () => this.controlador?.procesarImportado({
                numeroIdentificacion: this.numeroIdentificacion,
                bateos: this.bateos,
                vecesAlBate: this.vecesAlBate,
                anualidad: this.anualidad,
            })
        });
    }
    get anualidad() {
        return +this.inAnualidad.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Importado" });
        this.inAnualidad.value = "";
        this.divInAnualidad.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
