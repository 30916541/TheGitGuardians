import Cl_vComerciante from "./Cl_vComerciante.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";

interface iPersona {
    cedula: string;
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: number;
    porcentajeAprobado: number;
}

export default class Cl_vCasaPrestamo extends Cl_vGeneral {
    private _vComerciante: Cl_vComerciante;
    private dataPersonas: HTMLElement;
    private lblCreditosAprobados: HTMLElement;
    private lblCreditosNoAprobados: HTMLElement;
    private btAgregarComerciante: HTMLButtonElement;

    constructor() {
        super({ formName: "mainForm" });
        this._vComerciante = new Cl_vComerciante();
        this.dataPersonas = this.crearHTMLElement({elementName: "dataPersonas",});
        this.lblCreditosAprobados = this.crearHTMLElement({elementName: "lblCreditosAprobados",});
        this.lblCreditosNoAprobados = this.crearHTMLElement({elementName: "lblCreditosNoAprobados",});

        this.btAgregarComerciante = this.crearHTMLButtonElement({elementName: "btAgregarComerciante", onclick: () => {
            this.show({ver: false});
            this.vComerciante.show();
        }
    });

    this.dataPersonas.innerHTML = "";
    this.vComerciante.show({ver: false});
    }

    set controlador(controlador: Cl_controlador) {
        super.controlador = controlador;
        this.vComerciante.controlador = controlador;
    }

    get vComerciante(): Cl_vComerciante {
        return this._vComerciante;
    }

    reportarPersonas({
        dataPersonas,
        creditosAprobados,
        creditosNoAprobados,
    }: {
        dataPersonas: iPersona;
        creditosAprobados: number;
        creditosNoAprobados: number;
    }): void {
        this.dataPersonas.innerHTML += `
        <tr>
            <td class="colString">${dataPersonas.cedula}</td>
            <td class="colString">${dataPersonas.nombre}</td>
            <td class="colNumber">${dataPersonas.edad}</td>
            <td class="colString">${dataPersonas.sexo}</td>
            <td class="colNumber">${dataPersonas.estadoCivil}</td>
            <td class="colNumber">${dataPersonas.porcentajeAprobado}%</td>
        </tr>
        `;
        this.lblCreditosAprobados.innerHTML = `${creditosAprobados}`;
        this.lblCreditosNoAprobados.innerHTML = `${creditosNoAprobados}`;
    }
    
    show({ver = true}: {ver?: boolean} = {ver: true}) {
        super.show({ver});
        if(ver)
        this.vComerciante.show({ver: false});
    }
}