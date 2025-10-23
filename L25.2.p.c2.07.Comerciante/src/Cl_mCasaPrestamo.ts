import Cl_mPersona from "./Cl_mPersona.js";
import Cl_mComerciante from "./Cl_mComerciante.js";

export default class Cl_mCasaPrestamo {
    private cntCreditosAprobados: number = 0;
    private cntCreditosNoAprobados: number = 0;

    constructor() {
        this.cntCreditosAprobados = 0;
        this.cntCreditosNoAprobados = 0;
    }

    procesarPersona(persona: Cl_mPersona): void{

        if(persona.porcentajeAprobado() === 100)
            this.cntCreditosAprobados++;

        if(persona.porcentajeAprobado() === 0)
            this.cntCreditosNoAprobados++;
    }

    creditosAprobados(): number {
        return this.cntCreditosAprobados;
    }

    creditosNoAprobados(): number {
        return this.cntCreditosNoAprobados;
    }
}

