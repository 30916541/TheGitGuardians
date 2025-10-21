import Cl_vCliente from "./Cl_vCliente.js";

interface iCabelloCorto {
    cedula: string,
    servicio: number,
    extension: string,
}

export default class Cl_vCabelloCorto extends Cl_vCliente {
    private divInExtension: HTMLElement;
    private inExtension: HTMLInputElement;
    private btAceptar: HTMLButtonElement;

    constructor() {
        super();
        this.divInExtension = this.crearHTMLElement({elementName: "divInExtension"});
        this.inExtension = this.crearHTMLInputElement({elementName: "inExtension"});
        this.btAceptar = this.crearHTMLButtonElement({elementName: "btAceptarCabelloCorto", onclick: () => 
            this.controlador ?.procesarCabelloCorto({
                cedula: this.cedula,
                servicio: this.servicio,
                extension: this.extension,
            })
        });    
    }

    get extension() {
        return this.inExtension.value;
    }

    show({ver = true}: { ver?: boolean } = { ver: true }) {
        super.show({ ver, nombreTipo: "Cabello Corto" });
        this.inExtension.value = "";
        this.divInExtension.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}

export type { iCabelloCorto };
