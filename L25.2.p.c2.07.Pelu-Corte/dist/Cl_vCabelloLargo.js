import Cl_vCliente from "./Cl_vCliente.js";
export default class Cl_vCabelloLargo extends Cl_vCliente {
    constructor() {
        super();
        this.divInPermanente = this.crearHTMLElement({ elementName: "divInPermanente" });
        this.inPermanente = this.crearHTMLInputElement({ elementName: "inPermanente" });
        this.btAceptar = this.crearHTMLButtonElement({ elementName: "btAceptarCabelloLargo", onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarCabelloLargo({
                    cedula: this.cedula,
                    servicio: this.servicio,
                    permanente: this.permanente,
                });
            }
        });
    }
    get permanente() {
        return this.inPermanente.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Cabello Largo" });
        this.inPermanente.value = "";
        this.divInPermanente.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
