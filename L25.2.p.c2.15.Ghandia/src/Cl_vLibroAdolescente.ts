import Cl_vLibro from "./Cl_vLibro.js";

interface iLibroAdolescente{
    codigo: string;
    precio: number;
    saga: string;
} 

export default class Cl_vLibroAdolescente extends Cl_vLibro {
    private divInSaga: HTMLElement;
    private inSaga: HTMLInputElement;
    private btAceptar: HTMLButtonElement;

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

    get saga(): string {
        return this.inSaga.value;
    }

    show({ ver = true }: { ver?: boolean } = {ver : true}): void {
        super.show({ ver, nombreTipo: "Libro Adolescente" });
        this.inSaga.value = "";
        this.divInSaga.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}

export type { iLibroAdolescente };