import Cl_mLibreria from "./Cl_mLibreria.js";
import Cl_mLibro from "./Cl_mLibro.js";
import Cl_mLibroAdolescente from "./Cl_mLibroAdolescente.js";
import Cl_mLibroNino from "./Cl_mLibroNino.js";
import Cl_vLibreria from "./Cl_vLibreria.js";
export default class Cl_controlador {
    modelo;
    vista;
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarLibroNino(data) {
        const mLibroNino = new Cl_mLibroNino({
            codigo: data.codigo,
            precio: data.precio,
            ilustrado: data.ilustrado,
        });
        this.modelo.procesarLibro(mLibroNino);
        this.reportarLibro({ mLibro: mLibroNino });
    }
    procesarLibroAdolescente(data) {
        const mLibroAdolescente = new Cl_mLibroAdolescente({
            codigo: data.codigo,
            precio: data.precio,
            saga: data.saga,
        });
        this.modelo.procesarLibro(mLibroAdolescente);
        this.reportarLibro({ mLibro: mLibroAdolescente });
    }
    reportarLibro({ mLibro }) {
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
