import Cl_vComerciante from "./Cl_vComerciante.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vCasaPrestamo extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vComerciante = new Cl_vComerciante();
        this.dataPersonas = this.crearHTMLElement({ elementName: "dataPersonas", });
        this.lblCreditosAprobados = this.crearHTMLElement({ elementName: "lblCreditosAprobados", });
        this.lblCreditosNoAprobados = this.crearHTMLElement({ elementName: "lblCreditosNoAprobados", });
        this.btAgregarComerciante = this.crearHTMLButtonElement({ elementName: "btAgregarComerciante", onclick: () => {
                this.show({ ver: false });
                this.vComerciante.show();
            }
        });
        this.dataPersonas.innerHTML = "";
        this.vComerciante.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this.vComerciante.controlador = controlador;
    }
    get vComerciante() {
        return this._vComerciante;
    }
    reportarPersonas({ dataPersonas, creditosAprobados, creditosNoAprobados, }) {
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
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver)
            this.vComerciante.show({ ver: false });
    }
}
