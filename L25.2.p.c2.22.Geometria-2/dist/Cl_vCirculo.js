import Cl_vFigura from "./Cl_vFigura.js";
export default class Cl_vCirculo extends Cl_vFigura {
    divInRadio;
    inRadio;
    btAceptar;
    constructor() {
        super();
        this.divInRadio = this.crearHTMLElement({ elementName: "divInRadio" });
        this.inRadio = this.crearHTMLInputElement({ elementName: "inRadio" });
        this.btAceptar = this.crearHTMLButtonElement({ elementName: "btAceptar",
            onclick: () => this.controlador?.procesarCirculo({
                coorX: this.coorX,
                coorY: this.coorY,
                radio: this.radio,
            }),
        });
    }
    get radio() {
        return +this.inRadio.value;
    }
    show({ ver = true, } = { ver: true }) {
        super.show({ ver });
        this.inRadio.value = "";
        this.divInRadio.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
