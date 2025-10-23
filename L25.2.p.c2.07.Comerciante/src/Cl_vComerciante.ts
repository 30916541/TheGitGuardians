import Cl_vPersona from "./Cl_vPersona.js";

interface iComerciante {
    cedula: string;
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: number;
}

export default class Cl_vComerciante extends Cl_vPersona {
    private btAceptar: HTMLButtonElement;

    constructor() {
        super();
        this.btAceptar = this.crearHTMLButtonElement({elementName: "btAceptarComerciante", onclick: () => 
            this.controlador?.procesarComerciante({
                cedula: this.cedula,
                nombre: this.nombre,
                edad: this.edad,
                sexo: this.sexo,
                estadoCivil: this.estadoCivil,
            })
        });
    }

    show({ver = true}: {ver?: boolean} = {ver: true}) {
        super.show({ver});
        this.btAceptar.focus();
    }
}

export type { iComerciante };