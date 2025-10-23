export default class Cl_mPersona {
    public _cedula: string = "";
    public _nombre: string = "";
    public _edad: number = 0;
    public _sexo: string = "";
    public _estadoCivil: number = 0;

    constructor ({
        cedula,
        nombre,
        edad,
        sexo,
        estadoCivil
    }: {
        cedula: string;
        nombre: string;
        edad: number;
        sexo: string;
        estadoCivil: number;
    }) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }

    set cedula(cedula: string) {
        this._cedula = cedula;
    }

    get cedula(): string {
        return this._cedula;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get nombre(): string {
        return this._nombre;
    }

    set edad(edad: number) {
        this._edad = +edad;
    }

    get edad(): number {
        return this._edad;
    }

    set sexo(sexo: string) {
        this._sexo = sexo;
    }

    get sexo(): string {
        return this._sexo;
    }

    set estadoCivil(estadoCivil: number) {
        this._estadoCivil = +estadoCivil;
    }

    get estadoCivil(): number {
        return this._estadoCivil;
    }

    porcentajeAprobado(): number {
        return 0;
    }

    toJSON() {
        return {
            cedula: this.cedula,
            nombre: this.nombre,
            edad: this.edad,
            sexo: this.sexo,
            estadoCivil: this.estadoCivil,
            porcentajeAprobado: this.porcentajeAprobado(),
        };
    }
}