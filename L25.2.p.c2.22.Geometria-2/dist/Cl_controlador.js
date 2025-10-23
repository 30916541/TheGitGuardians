import Cl_vGeometria from "./Cl_vGeometria.js";
import Cl_mProcesador from "./Cl_mProcesador.js";
import Cl_mFigura from "./Cl_mFigura.js";
import Cl_mCirculo from "./Cl_mCirculo.js";
export default class Cl_controlador {
    vista;
    modelo;
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarCirculo(data) {
        const mCirculo = new Cl_mCirculo({
            coorX: data.coorX,
            coorY: data.coorY,
            radio: data.radio,
        });
        this.modelo.procesarFigura(mCirculo);
        this.reportarFigura({ mFigura: mCirculo });
    }
    reportarFigura({ mFigura }) {
        this.vista.reportarFigura({
            dataFigura: mFigura.toJSON(),
        });
        this.vista.show();
    }
}
