import Cl_vCriollo from "./Cl_vCriollo.js";
import Cl_vImportado from "./Cl_vImportado.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";
export default class Cl_vEquipo extends Cl_vGeneral {
    _vCriollo;
    _vImportado;
    dataJugadores;
    lblPromedioMensualImportado;
    btAgregarCriollo;
    btAgregarImportado;
    constructor() {
        super({ formName: 'mainForm' });
        this._vCriollo = new Cl_vCriollo();
        this._vImportado = new Cl_vImportado();
        this.dataJugadores = this.crearHTMLElement({ elementName: "dataJugadores" });
        this.lblPromedioMensualImportado = this.crearHTMLElement({ elementName: "lblPromedioMensualImportado" });
        this.btAgregarCriollo = this.crearHTMLButtonElement({ elementName: "btAgregarCriollo", onclick: () => {
                this.show({ ver: false });
                this.vCriollo.show();
            },
        });
        this.btAgregarImportado = this.crearHTMLButtonElement({ elementName: "btAgregarImportado", onclick: () => {
                this.show({ ver: false });
                this.vImportado.show();
            },
        });
        this.dataJugadores.innerHTML = "";
        this.vCriollo.show({ ver: false });
        this.vImportado.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this.vCriollo.controlador = controlador;
        this.vImportado.controlador = controlador;
    }
    get vCriollo() {
        return this._vCriollo;
    }
    get vImportado() {
        return this._vImportado;
    }
    reportarJugador({ dataJugadores, promedioMensualImportado, }) {
        this.dataJugadores.innerHTML += `
        <tr>
            <td class="colString">${dataJugadores.numeroIdentificacion}</td>
            <td class="colString">${dataJugadores.tipo}</td>
            <td class="colNumber">${dataJugadores.bateos}</td>
            <td class="colNumber">${dataJugadores.vecesAlBate}</td>
            <td class="colNumber">${dataJugadores.mensualidad ? `$${dataJugadores.mensualidad}` : "--"}</td>
            <td class="colNumber">${dataJugadores.anualidad ? `$${dataJugadores.anualidad}` : "--"}</td>
            <td class="colNumber">${dataJugadores.mensualidadBase ? `$${dataJugadores.mensualidadBase.toFixed(2)}` : "--"}</td>
            <td class="colNumber">${dataJugadores.average.toFixed(2)}</td>
            <td class="colNumber">$${dataJugadores.bonificacion.toFixed(2)}</td>
            <td class="colNumber">$${dataJugadores.pagoMensual.toFixed(2)}</td>
        </tr>
        `;
        this.lblPromedioMensualImportado.innerHTML = `$${promedioMensualImportado.toFixed(2)}`;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vCriollo.show({ ver: false });
            this.vImportado.show({ ver: false });
        }
    }
}
