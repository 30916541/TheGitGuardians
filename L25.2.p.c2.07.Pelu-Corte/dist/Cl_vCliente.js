import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vCliente extends Cl_vGeneral {
    constructor() {
        super({ formName: 'clienteForm' });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inCedula = this.crearHTMLInputElement({ elementName: "inCedula" });
        this.inServicio = this.crearHTMLInputElement({ elementName: "inServicio" });
        this.btCancelar = this.crearHTMLButtonElement({ elementName: "btCancelar", onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get cedula() {
        return this.inCedula.value;
    }
    get servicio() {
        return +this.inServicio.value;
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inCedula.value = "";
        this.inServicio.value = "";
        this.inCedula.focus();
    }
}
