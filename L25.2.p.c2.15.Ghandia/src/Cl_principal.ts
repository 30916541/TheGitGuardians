import Cl_mLibreria from "./Cl_mLibreria.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_mLibroNino from "./Cl_mLibroNino.js";
import Cl_mLibroAdolescente from "./Cl_mLibroAdolescente.js";
import Cl_vLibreria from "./Cl_vLibreria.js";
import { libroAdolescente, libroNino } from "./_data.js";

export default class Cl_principal {
    private controlador: Cl_controlador;

    constructor() {
        const modelo = new Cl_mLibreria();
        const vista = new Cl_vLibreria();
        this.controlador = new Cl_controlador(modelo, vista);

        vista.controlador = this.controlador;

        this.iniciarData();
    }

    iniciarData() {
        // this.controlador.procesarLibroNino(new Cl_mLibroNino(libroNino[0]));
        // this.controlador.procesarLibroNino(new Cl_mLibroNino(libroNino[1]));
        // this.controlador.procesarLibroNino(new Cl_mLibroNino(libroNino[2]));
        // this.controlador.procesarLibroNino(new Cl_mLibroNino(libroNino[3]));
        // this.controlador.procesarLibroAdolescente(new Cl_mLibroAdolescente(libroAdolescente[0]));
        // this.controlador.procesarLibroAdolescente(new Cl_mLibroAdolescente(libroAdolescente[1]));
        // this.controlador.procesarLibroAdolescente(new Cl_mLibroAdolescente(libroAdolescente[2]));
        // this.controlador.procesarLibroAdolescente(new Cl_mLibroAdolescente(libroAdolescente[3]));

        const n0 = libroNino[0]; if (n0) this.controlador.procesarLibroNino(n0);
        const n1 = libroNino[1]; if (n1) this.controlador.procesarLibroNino(n1);
        const n2 = libroNino[2]; if (n2) this.controlador.procesarLibroNino(n2);
        const n3 = libroNino[3]; if (n3) this.controlador.procesarLibroNino(n3);

        const a0 = libroAdolescente[0]; if (a0) this.controlador.procesarLibroAdolescente(a0);
        const a1 = libroAdolescente[1]; if (a1) this.controlador.procesarLibroAdolescente(a1);
        const a2 = libroAdolescente[2]; if (a2) this.controlador.procesarLibroAdolescente(a2);
        const a3 = libroAdolescente[3]; if (a3) this.controlador.procesarLibroAdolescente(a3);  
    }
}