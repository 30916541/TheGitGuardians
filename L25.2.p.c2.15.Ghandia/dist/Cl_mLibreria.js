import Cl_mLibro from "./Cl_mLibro.js";
import Cl_mLibroNino from "./Cl_mLibroNino.js";
import Cl_mLibroAdolescente from "./Cl_mLibroAdolescente.js";
export default class Cl_mLibreria {
    cntLibros = 0;
    cntLibrosMayores100 = 0;
    cntLibrosIlustrados = 0;
    acPrecioLibrosIlustrados = 0;
    constructor() {
        this.cntLibros = 0;
        this.cntLibrosMayores100 = 0;
        this.cntLibrosIlustrados = 0;
        this.acPrecioLibrosIlustrados = 0;
    }
    procesarLibro(libro) {
        this.cntLibros++;
        if (libro.precioPagar() >= 100) {
            this.cntLibrosMayores100++;
        }
        if (libro instanceof Cl_mLibroNino) {
            if (libro.ilustrado.toLowerCase() === "si") {
                this.cntLibrosIlustrados++;
                this.acPrecioLibrosIlustrados += libro.precioPagar();
            }
        }
    }
    totalLibrosIlustrados() {
        return this.cntLibrosIlustrados;
    }
    montoTotalLibrosIlustrados() {
        return this.acPrecioLibrosIlustrados;
    }
    promedioPrecioLibrosIlustrados() {
        return this.acPrecioLibrosIlustrados / this.cntLibrosIlustrados;
    }
    librosMayores100() {
        return this.cntLibrosMayores100;
    }
    totalLibros() {
        return this.cntLibros;
    }
    porcentajeLibrosMayores100() {
        return (this.cntLibrosMayores100 / this.cntLibros) * 100;
    }
}
