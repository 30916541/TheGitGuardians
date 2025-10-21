import Cl_vLibro from "./Cl_vLibro.js";
export default class Cl_vLibroAdolescente extends Cl_vLibro {
    divInSaga;
    inSaga;
    btAceptar;
    constructor() {
        super();
        this.divInSaga = this.crearHTMLElement({ elementName: "divInSaga" });
        this.inSaga = this.crearHTMLInputElement({ elementName: "inSaga" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarLibroAdolescente",
            onclick: () => {
                this.controlador?.procesarLibroAdolescente({
                    codigo: this.codigo,
                    precio: this.precio,
                    saga: this.saga,
                });
            },
        });
    }
    get saga() {
        return this.inSaga.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Libro Adolescente" });
        this.inSaga.value = "";
        this.divInSaga.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
