import Cl_mLibreria from "./Cl_mLibreria.js";
import Cl_mLibro from "./Cl_mLibro.js";
import Cl_mLibroAdolescente from "./Cl_mLibroAdolescente.js";
import Cl_mLibroNino from "./Cl_mLibroNino.js";
import Cl_vLibreria from "./Cl_vLibreria.js";
import type { iLibroAdolescente } from "./Cl_vLibroAdolescente.js";
import type { iLibroNino } from "./Cl_vLibroNino.js";

export default class Cl_controlador {
    public modelo: Cl_mLibreria;
    public vista: Cl_vLibreria;

    constructor(modelo: Cl_mLibreria, vista: Cl_vLibreria) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarLibroNino(data: iLibroNino) {
        const mLibroNino = new Cl_mLibroNino({
            codigo: data.codigo,
            precio: data.precio,
            ilustrado: data.ilustrado,
        });
        this.modelo.procesarLibro(mLibroNino);
        this.reportarLibro({mLibro : mLibroNino});
    }

    procesarLibroAdolescente(data: iLibroAdolescente) {
        const mLibroAdolescente = new Cl_mLibroAdolescente({
            codigo: data.codigo,
            precio: data.precio,
            saga: data.saga,
        });
        this.modelo.procesarLibro(mLibroAdolescente);
        this.reportarLibro({mLibro : mLibroAdolescente});
    }

    reportarLibro({mLibro}: {mLibro: Cl_mLibro}) {
        this.vista.reportarLibro({
            dataLibros: mLibro.toJSON(),
            totalLibrosIlustrados: this.modelo.totalLibrosIlustrados(),
            TotalIlustrados: this.modelo.montoTotalLibrosIlustrados(),
            precioPromedioIlustrados: this.modelo.promedioPrecioLibrosIlustrados(),
            LibrosMayor100: this.modelo.librosMayores100(),
            CantidadLibros: this.modelo.totalLibros(),
            PorcentajeLibrosMayor100: this.modelo.porcentajeLibrosMayores100(),
        });
        this.vista.show();
    }
}