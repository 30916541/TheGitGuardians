import Cl_vCirculo from "./Cl_vCirculo.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";
export default class Cl_vGeometria extends Cl_vGeneral {
    _vCirculo;
    dataFiguras;
    btAgregarCirculo;
    constructor() {
        super({ formName: "mainForm" });
        this._vCirculo = new Cl_vCirculo();
        this.dataFiguras = this.crearHTMLElement({ elementName: "dataFiguras" });
        this.btAgregarCirculo = this.crearHTMLButtonElement({
            elementName: "btAgregarCirculo",
            onclick: () => {
                this.show({ ver: false });
                this.vCirculo.show();
            },
        });
        this.dataFiguras.innerHTML = "";
        this.vCirculo.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this.vCirculo.controlador = controlador;
    }
    get vCirculo() {
        return this._vCirculo;
    }
    reportarFigura({ dataFigura, }) {
        this.dataFiguras.innerHTML += `
                    <tr>
                        <td class="colNumber">${dataFigura.coorX}</td>
                        <td class="colNumber">${dataFigura.coorY}</td>
                        <td class="colNumber">${dataFigura.radio ? dataFigura.radio : "--"}</td>
                        <td class="colNumber">${dataFigura.area.toFixed(2)}</td>
                        <td class="colNumber">${dataFigura.perimetro.toFixed(2)}</td>
                    </tr>
                    `;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vCirculo.show({ ver: false });
        }
    }
}
