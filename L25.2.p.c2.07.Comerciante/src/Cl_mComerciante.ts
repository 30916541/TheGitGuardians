import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mComerciante extends Cl_mPersona {

    constructor({
        cedula,
        nombre,
        edad,
        sexo,
        estadoCivil,
    }: {
        cedula: string;
        nombre: string;
        edad: number;
        sexo: string;
        estadoCivil: number;
    }) {
        super({ cedula, nombre, edad, sexo, estadoCivil })
    }

    porcentajeAprobado(): number {
        if(this.sexo === "F" && this.estadoCivil === 2)
            return 100;
        else if(this.sexo === "M" && this.edad > 20)
            return 50;
        else
            return 0;
    }

    toJSON() {
        return {
            ... super.toJSON(),
        }
    }
}