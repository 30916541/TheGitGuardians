import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vLibro extends Cl_vGeneral {
    inCodigo;
    inPrecio;
    lblTipo;
    btCancelar;
    constructor() {
        super({ formName: "libroForm" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inCodigo = this.crearHTMLInputElement({ elementName: "inCodigo" });
        this.inPrecio = this.crearHTMLInputElement({ elementName: "inPrecio" });
        this.btCancelar = this.crearHTMLButtonElement({
            elementName: "btCancelar",
            onclick: () => {
                this.show({ ver: false });
                this.controlador?.vista.show();
            },
        });
    }
    get codigo() {
        return this.inCodigo.value;
    }
    get precio() {
        return +this.inPrecio.value;
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inCodigo.value = "";
        this.inPrecio.value = "";
        this.inCodigo.focus();
    }
}
