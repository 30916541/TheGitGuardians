import Cl_mComerciante from "./Cl_mComerciante.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarComerciante(data) {
        const mComerciante = new Cl_mComerciante({
            cedula: data.cedula,
            nombre: data.nombre,
            edad: data.edad,
            sexo: data.sexo,
            estadoCivil: data.estadoCivil,
        });
        this.modelo.procesarPersona(mComerciante);
        this.reportarPersonas({ mPersona: mComerciante });
    }
    reportarPersonas({ mPersona }) {
        this.vista.reportarPersonas({
            dataPersonas: mPersona.toJSON(),
            creditosAprobados: this.modelo.creditosAprobados(),
            creditosNoAprobados: this.modelo.creditosNoAprobados(),
        });
        this.vista.show();
    }
}
