	import Cl_vGeneral from "./Cl_vGeneral.js";

	export default class Cl_vLibro extends Cl_vGeneral {
	private inCodigo: HTMLInputElement;
	private inPrecio: HTMLInputElement;
	private lblTipo: HTMLElement;
	private btCancelar: HTMLButtonElement;

	constructor() {
		super({ formName: "libroForm" });

		this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
		this.inCodigo = this.crearHTMLInputElement({ elementName: "inCodigo" });
		this.inPrecio = this.crearHTMLInputElement({ elementName: "inPrecio" });
		this.btCancelar = this.crearHTMLButtonElement({
		elementName: "btCancelar",
		onclick: () => {
			this.show({ ver: false });
			this.controlador?.vista.show();
		},
		});
	}

	get codigo(): string {
		return this.inCodigo.value;
	}

	get precio(): number {
		return +this.inPrecio.value;
	}

	show({
		ver = true,
		nombreTipo = "",
	}: {
		ver?: boolean;
		nombreTipo?: string;
	}): void {
		super.show({ ver });
		this.lblTipo.innerHTML = nombreTipo;
		this.inCodigo.value = "";
		this.inPrecio.value = "";
		this.inCodigo.focus();
	}
	}
