export default class Cl_mCasaPrestamo {
    constructor() {
        this.cntCreditosAprobados = 0;
        this.cntCreditosNoAprobados = 0;
        this.cntCreditosAprobados = 0;
        this.cntCreditosNoAprobados = 0;
    }
    procesarPersona(persona) {
        if (persona.porcentajeAprobado() === 100)
            this.cntCreditosAprobados++;
        if (persona.porcentajeAprobado() === 0)
            this.cntCreditosNoAprobados++;
    }
    creditosAprobados() {
        return this.cntCreditosAprobados;
    }
    creditosNoAprobados() {
        return this.cntCreditosNoAprobados;
    }
}
