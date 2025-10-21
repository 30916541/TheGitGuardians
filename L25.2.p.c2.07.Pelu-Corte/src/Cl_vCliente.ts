import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vCliente extends Cl_vGeneral {
    private inCedula: HTMLInputElement;
    private inServicio: HTMLInputElement;
    private lblTipo: HTMLElement;
    private btCancelar: HTMLButtonElement;

    constructor() {
        super({ formName: 'clienteForm' });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inCedula = this.crearHTMLInputElement({ elementName: "inCedula" });
        this.inServicio = this.crearHTMLInputElement({ elementName: "inServicio" });
        this.btCancelar = this.crearHTMLButtonElement({elementName: "btCancelar", onclick: () => {
        this.show({ ver: false });
            this.controlador?.vista.show();
        },
    });
    }

    get cedula(): string {
        return this.inCedula.value;
    }

    get servicio(): number {
        return +this.inServicio.value;
    }

    show({
        ver = true,
        nombreTipo = "",
    }: {
        ver?: boolean,
        nombreTipo?: string;
    }): void {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inCedula.value = "";
        this.inServicio.value = "";
        this.inCedula.focus();
    }
}