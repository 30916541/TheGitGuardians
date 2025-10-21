export default class Cl_mLibro {
    _codigo = "";
    _precio = 0;
    constructor({ codigo, precio, }) {
        this.codigo = codigo;
        this.precio = precio;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
    }
    set precio(precio) {
        this._precio = +precio;
    }
    get precio() {
        return this._precio;
    }
    descuento() {
        return 0;
    }
    precioPagar() {
        return 0;
    }
    toJSON() {
        return {
            codigo: this.codigo,
            precio: this.precio,
            descuento: this.descuento(),
            precioPagar: this.precioPagar(),
        };
    }
}
