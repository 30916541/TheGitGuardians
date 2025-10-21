import Cl_vCliente from "./Cl_vCliente.js";

interface iCabelloLargo {
    cedula: string,
    servicio: number,
    permanente: string,
}

export default class Cl_vCabelloLargo extends Cl_vCliente {
    private divInPermanente: HTMLElement;
    private inPermanente: HTMLInputElement;
    private btAceptar: HTMLButtonElement;

    constructor() {
        super();
        this.divInPermanente = this.crearHTMLElement({elementName: "divInPermanente"});
        this.inPermanente = this.crearHTMLInputElement({elementName: "inPermanente"});
        this.btAceptar = this.crearHTMLButtonElement({elementName: "btAceptarCabelloLargo", onclick: () => 
            this.controlador ?.procesarCabelloLargo({
                cedula: this.cedula,
                servicio: this.servicio,
                permanente: this.permanente,
            })
        });
    }

    get permanente() {
        return this.inPermanente.value;
    }

    show({ver = true}: { ver?: boolean } = { ver: true }) {
        super.show({ ver, nombreTipo: "Cabello Largo" });
        this.inPermanente.value = "";
        this.divInPermanente.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
export type { iCabelloLargo };