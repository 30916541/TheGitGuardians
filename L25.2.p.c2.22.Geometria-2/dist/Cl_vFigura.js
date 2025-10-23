import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vFigura extends Cl_vGeneral {
    inCoorX;
    inCoorY;
    btCancelar;
    constructor() {
        super({ formName: "figuraForm" });
        this.inCoorX = this.crearHTMLInputElement({ elementName: "inCoorX" });
        this.inCoorY = this.crearHTMLInputElement({ elementName: "inCoorY" });
        this.btCancelar = this.crearHTMLButtonElement({ elementName: "btCancelar",
            onclick: () => {
                this.show({ ver: false });
                this.controlador?.vista.show();
            },
        });
    }
    get coorX() {
        return +this.inCoorX.value;
    }
    get coorY() {
        return +this.inCoorY.value;
    }
    show({ ver = true, }) {
        super.show({ ver });
        this.inCoorX.value = "";
        this.inCoorY.value = "";
        this.inCoorX.focus();
    }
}
