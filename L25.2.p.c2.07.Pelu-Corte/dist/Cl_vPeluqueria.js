import Cl_vCabelloCorto from "./Cl_vCabelloCorto.js";
import Cl_vCabelloLargo from "./Cl_vCabelloLargo.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vPeluqueria extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vCabelloCorto = new Cl_vCabelloCorto();
        this._vCabelloLargo = new Cl_vCabelloLargo();
        this.dataClientes = this.crearHTMLElement({ elementName: "dataClientes" });
        this.lblMayorMontoPagado = this.crearHTMLElement({ elementName: "lblMayorMontoPagado" });
        this.btAgregarCabelloCorto = this.crearHTMLButtonElement({ elementName: "btAgregarCabelloCorto", onclick: () => {
                this.show({ ver: false });
                this.vCabelloCorto.show();
            }
        });
        this.btAgregarCabelloLargo = this.crearHTMLButtonElement({ elementName: "btAgregarCabelloLargo", onclick: () => {
                this.show({ ver: false });
                this.vCabelloLargo.show();
            }
        });
        this.dataClientes.innerHTML = "";
        this.vCabelloCorto.show({ ver: false });
        this.vCabelloLargo.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this.vCabelloCorto.controlador = controlador;
        this.vCabelloLargo.controlador = controlador;
    }
    get vCabelloCorto() {
        return this._vCabelloCorto;
    }
    get vCabelloLargo() {
        return this._vCabelloLargo;
    }
    reportarCliente({ dataClientes, mayorMontoPagado, }) {
        this.dataClientes.innerHTML += `
        <tr>
            <td class="colString">${dataClientes.cedula}</td>
            <td class="colString">${dataClientes.tipo}</td>
            <td class="colNumber">${dataClientes.servicio}</td>
            <td class="colString">${dataClientes.extension ? `${dataClientes.extension}` : "--"}</td>
            <td class="colString">${dataClientes.permanente ? `${dataClientes.permanente}` : "--"}</td>
            <td class="colNumber">$${dataClientes.precio.toFixed(2)}</td>
            <td class="colNumber">${dataClientes.precioExtension ? `$${dataClientes.precioExtension.toFixed(2)}` : "--"}</td>
            <td class="colNumber">${dataClientes.precioPermanente ? `$${dataClientes.precioPermanente.toFixed(2)}` : "--"}</td>
            <td class="colNumber">$${dataClientes.descuento.toFixed(2)}</td>
            <td class="colNumber">$${dataClientes.montoPagar.toFixed(2)}</td>
        </tr>
        `;
        this.lblMayorMontoPagado.innerHTML = `$${mayorMontoPagado.toFixed(2)}`;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vCabelloCorto.show({ ver: false });
            this.vCabelloLargo.show({ ver: false });
        }
    }
}
