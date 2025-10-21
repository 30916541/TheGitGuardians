import Cl_vCliente from "./Cl_vCliente.js";
export default class Cl_vCabelloCorto extends Cl_vCliente {
    constructor() {
        super();
        this.divInExtension = this.crearHTMLElement({ elementName: "divInExtension" });
        this.inExtension = this.crearHTMLInputElement({ elementName: "inExtension" });
        this.btAceptar = this.crearHTMLButtonElement({ elementName: "btAceptarCabelloCorto", onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarCabelloCorto({
                    cedula: this.cedula,
                    servicio: this.servicio,
                    extension: this.extension,
                });
            }
        });
    }
    get extension() {
        return this.inExtension.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Cabello Corto" });
        this.inExtension.value = "";
        this.divInExtension.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
