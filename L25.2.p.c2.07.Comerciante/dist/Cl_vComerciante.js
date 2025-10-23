import Cl_vPersona from "./Cl_vPersona.js";
export default class Cl_vComerciante extends Cl_vPersona {
    constructor() {
        super();
        this.btAceptar = this.crearHTMLButtonElement({ elementName: "btAceptarComerciante", onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarComerciante({
                    cedula: this.cedula,
                    nombre: this.nombre,
                    edad: this.edad,
                    sexo: this.sexo,
                    estadoCivil: this.estadoCivil,
                });
            }
        });
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        this.btAceptar.focus();
    }
}
