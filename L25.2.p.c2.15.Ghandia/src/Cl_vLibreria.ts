import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_vLibroAdolescente from "./Cl_vLibroAdolescente.js";
import Cl_vLibroNino from "./Cl_vLibroNino.js";
import Cl_controlador from "./Cl_controlador.js";

interface iLibro {
    codigo: string;
    precio: number;
    ilustrado?: string;
    saga?: string;
    descuento?: number;
    incremento?: number;
    precioPagar: number;
    tipo?: string;
}

export default class Cl_vLibreria extends Cl_vGeneral {
    private _vLibroNino: Cl_vLibroNino;
    private _vLibroAdolescente: Cl_vLibroAdolescente;
    private dataLibros: HTMLElement;
    private lblTotalLibrosIlustrados: HTMLElement;
    private lblTotalIlustrados: HTMLElement;
    private lblPrecioPromedioIlustrados: HTMLElement;
    private lblLibrosMayor100: HTMLElement;
    private lblCantidadLibros: HTMLElement;
    private lblPorcentajeLibrosMayor100: HTMLElement;
    private btAgregarLibroNino: HTMLButtonElement;
    private btAgregarLibroAdolecente: HTMLButtonElement;

    constructor(){
        super({formName: "mainForm"});
        this._vLibroNino = new Cl_vLibroNino();
        this._vLibroAdolescente = new Cl_vLibroAdolescente();
        this.dataLibros = this.crearHTMLElement({elementName: "dataLibros"});
        this.lblTotalLibrosIlustrados = this.crearHTMLElement({elementName: "lblTotalLibrosIlustrados"});
        this.lblTotalIlustrados = this.crearHTMLElement({elementName: "lblTotalIlustrados"});
        this.lblPrecioPromedioIlustrados = this.crearHTMLElement({elementName: "lblPrecioPromedioIlustrados"});
        this.lblLibrosMayor100 = this.crearHTMLElement({elementName: "lblLibrosMayor100"});
        this.lblCantidadLibros = this.crearHTMLElement({elementName: "lblCantidadLibros"});
        this.lblPorcentajeLibrosMayor100 = this.crearHTMLElement({elementName: "lblPorcentajeLibrosMayor100"});
        this.btAgregarLibroNino = this.crearHTMLButtonElement({elementName: "btAgregarLibroNino",
            onclick: () => {
                this.show({ver : false});
                this._vLibroNino.show();
            }
        });
        this.btAgregarLibroAdolecente = this.crearHTMLButtonElement({elementName: "btAgregarLibroAdolescente",
            onclick: () => {
                this.show({ver : false});
                this._vLibroAdolescente.show();
            }
        });

        this.dataLibros.innerHTML = "";
        this._vLibroNino.show({ver : false});
        this._vLibroAdolescente.show({ver : false});
    }

    set controlador(controlador: Cl_controlador) {
        super.controlador = controlador;
        this.vLibroAdolescente.controlador = controlador;
        this.vLibroNino.controlador = controlador;
    }

    get vLibroNino() {
        return this._vLibroNino;
    }

    get vLibroAdolescente() {
        return this._vLibroAdolescente;
    }

    reportarLibro({
        dataLibros,
        totalLibrosIlustrados,
        TotalIlustrados,
        precioPromedioIlustrados,
        LibrosMayor100,
        CantidadLibros,
        PorcentajeLibrosMayor100,
    }: {
        dataLibros: iLibro;
        totalLibrosIlustrados: number;
        TotalIlustrados: number;
        precioPromedioIlustrados: number;
        LibrosMayor100: number;
        CantidadLibros: number;
        PorcentajeLibrosMayor100: number;
    }): void {
        this.dataLibros.innerHTML += `
            <tr>
                <td class="colString">${dataLibros.codigo}</td>
                <td class="colString">${dataLibros.tipo}</td>
                <td class="colNumber">$${dataLibros.precio.toFixed(2)}</td>
                <td class="colString">${dataLibros.ilustrado? `${dataLibros.ilustrado}` : "--"}</td>
                <td class="colString">${dataLibros.saga? `${dataLibros.saga}` : "--"}</td>
                <td class="colNumber">${dataLibros.descuento? `$${dataLibros.descuento.toFixed(2)}` : "--"}</td>
                <td class="colNumber">${dataLibros.incremento? `$${dataLibros.incremento.toFixed(2)}` : "--"}</td>
                <td class="colNumber">$${dataLibros.precioPagar.toFixed(2)}</td>
            </tr>
            `;
        this.lblTotalLibrosIlustrados.innerHTML = `${totalLibrosIlustrados} <br>`;
        this.lblTotalIlustrados.innerHTML = `$${TotalIlustrados}<br>`;
        this.lblPrecioPromedioIlustrados.innerHTML = `$${precioPromedioIlustrados.toFixed(2)}<br>`;
        this.lblLibrosMayor100.innerHTML = `${LibrosMayor100}<br>`;
        this.lblCantidadLibros.innerHTML = `${CantidadLibros}<br>`;
        this.lblPorcentajeLibrosMayor100.innerHTML = `${PorcentajeLibrosMayor100.toFixed(2)}%<br>`;
    }

    show({ver = true}: {ver?: boolean} = {ver : true}){
        super.show({ver});
        this.vLibroAdolescente.show({ver: false});
        this.vLibroNino.show({ver: false});
    }
}