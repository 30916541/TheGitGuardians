import Cl_vFigura from "./Cl_vFigura.js";

interface iCirculo{
    coorX: number;
    coorY: number;
    radio: number;
}

export default class Cl_vCirculo extends Cl_vFigura {
    private divInRadio: HTMLElement;
    private inRadio: HTMLInputElement;
    private btAceptar: HTMLButtonElement;

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

    get radio(): number {
        return +this.inRadio.value;
    }

    show({ver = true,}: {ver?: boolean} = {ver: true}) {
        super.show({ ver });
        this.inRadio.value = "";
        this.divInRadio.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}

export type { iCirculo };