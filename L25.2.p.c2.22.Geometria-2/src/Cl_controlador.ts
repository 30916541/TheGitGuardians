    import Cl_vGeometria from "./Cl_vGeometria.js";
    import Cl_mProcesador from "./Cl_mProcesador.js";
    import Cl_mFigura from "./Cl_mFigura.js";
    import Cl_mCirculo from "./Cl_mCirculo.js";
    import type { iCirculo } from "./Cl_vCirculo.js";

    export default class Cl_controlador {
    public vista: Cl_vGeometria;
    public modelo: Cl_mProcesador;

    constructor(modelo: Cl_mProcesador, vista: Cl_vGeometria) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarCirculo(data: iCirculo) {
        const mCirculo = new Cl_mCirculo({
        coorX: data.coorX,
        coorY: data.coorY,
        radio: data.radio,
        });
        this.modelo.procesarFigura(mCirculo);
        this.reportarFigura({ mFigura: mCirculo });
    }

    reportarFigura({ mFigura }: { mFigura: Cl_mFigura }) {
        this.vista.reportarFigura({
            dataFigura: mFigura.toJSON(),
        });
        this.vista.show();
    }
}