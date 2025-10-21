import Cl_mLibro from "./Cl_mLibro.js";
import Cl_mLibroNino from "./Cl_mLibroNino.js";
import Cl_mLibroAdolescente from "./Cl_mLibroAdolescente.js";

export default class Cl_mLibreria {
    private cntLibros: number = 0;
    private cntLibrosMayores100: number = 0;
    private cntLibrosIlustrados: number = 0;
    private acPrecioLibrosIlustrados: number = 0;


    constructor(){
        this.cntLibros = 0;
        this.cntLibrosMayores100 = 0;
        this.cntLibrosIlustrados = 0;
        this.acPrecioLibrosIlustrados = 0;
    }

    procesarLibro(libro: Cl_mLibro): void {

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

    totalLibrosIlustrados(): number {
        return this.cntLibrosIlustrados;
    }

    montoTotalLibrosIlustrados(): number {
        return this.acPrecioLibrosIlustrados;
    }
    
    promedioPrecioLibrosIlustrados(): number {
        return this.acPrecioLibrosIlustrados / this.cntLibrosIlustrados;
    }
    
    librosMayores100(): number {
        return this.cntLibrosMayores100;
    }

    totalLibros(): number {
        return this.cntLibros;
    }

    porcentajeLibrosMayores100(): number {
        return (this.cntLibrosMayores100 / this.cntLibros) * 100;
    }

}