import Cl_vLibro from "./Cl_vLibro.js";
export default class Cl_vLibroNino extends Cl_vLibro {
    divInIlustrado;
    inIlustrado;
    btAceptar;
    constructor() {
        super();
        this.divInIlustrado = this.crearHTMLElement({ elementName: "divInIlustrado" });
        this.inIlustrado = this.crearHTMLInputElement({ elementName: "inIlustrado" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarLibroNino",
            onclick: () => {
                this.controlador?.procesarLibroNino({
                    codigo: this.codigo,
                    precio: this.precio,
                    ilustrado: this.ilustrado,
                });
            },
        });
    }
    get ilustrado() {
        return this.inIlustrado.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Libro Niño" });
        this.inIlustrado.value = "";
        this.divInIlustrado.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
