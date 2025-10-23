import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vPersona extends Cl_vGeneral {
    private inCedula: HTMLInputElement;
    private inNombre: HTMLInputElement;
    private inEdad: HTMLInputElement;
    private inSexo: HTMLInputElement;
    private inEstadoCivil: HTMLInputElement;
    private btCancelar: HTMLButtonElement;

    constructor() {
        super({ formName: "personasForm" });
        this.inCedula = this.crearHTMLInputElement({elementName: "inCedula",});
        this.inNombre = this.crearHTMLInputElement({elementName: "inNombre",});
        this.inEdad = this.crearHTMLInputElement({elementName: "inEdad",});
        this.inSexo = this.crearHTMLInputElement({elementName: "inSexo",});
        this.inEstadoCivil = this.crearHTMLInputElement({elementName: "inEstadoCivil",});
        this.btCancelar = this.crearHTMLButtonElement({elementName: "btCancelar", onclick: () => {
            this.show({ ver: false });
            this.controlador ?.vista.show();
        }
    });
    }

    get cedula(): string {
        return this.inCedula.value;
    }

    get nombre(): string {
        return this.inNombre.value;
    }

    get edad(): number {
        return +this.inEdad.value;
    }
    
    get sexo(): string {
        return this.inSexo.value;
    }

    get estadoCivil(): number {
        return +this.inEstadoCivil.value;
    }

    show({
        ver = true,
    }: {
        ver?: boolean;
    }): void {
        super.show({ ver });
        this.inCedula.value = "";
        this.inNombre.value = "";
        this.inEdad.value = "";
        this.inSexo.value = "";
        this.inEstadoCivil.value = "";
        this.inCedula.focus();
    }
}
