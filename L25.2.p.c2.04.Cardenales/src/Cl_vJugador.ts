import Cl_vGeneral from './Cl_vGeneral.js';

export default class Cl_vJugador extends Cl_vGeneral {
    private inNumeroIdentificacion: HTMLInputElement;
    private inBateos: HTMLInputElement;
    private inVecesAlBate: HTMLInputElement;
    private lblTipo: HTMLElement;
    private btCancelar: HTMLButtonElement;

    constructor() {
        super({formName: 'jugadorForm'});
        this.lblTipo = this.crearHTMLElement({elementName : "lblTipo"});
        this.inNumeroIdentificacion = this.crearHTMLInputElement({elementName : "inNumeroIdentificacion"});
        this.inBateos = this.crearHTMLInputElement({elementName : "inBateos"});
        this.inVecesAlBate = this.crearHTMLInputElement({elementName : "inVecesAlBate"});
        this.btCancelar = this.crearHTMLButtonElement({elementName : "btCancelar", onclick: () => {
            this.show({ver: false});
            this.controlador?.vista.show();
        },
    });
    }

    get numeroIdentificacion() {
        return +this.inNumeroIdentificacion.value;
    }

    get bateos() {
        return +this.inBateos.value;
    }

    get vecesAlBate() {
        return +this.inVecesAlBate.value;
    }

    show({
        ver = true,
        nombreTipo = "",
    }: {
        ver?: boolean;
        nombreTipo?: string;
    }): void {
        super.show({ver});
        this.lblTipo.innerHTML = nombreTipo;
        this.inNumeroIdentificacion.value = "";
        this.inBateos.value = "";
        this.inVecesAlBate.value = "";
        this.inNumeroIdentificacion.focus();
    }
}