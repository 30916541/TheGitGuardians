interface iCabelloCorto {
    cedula: string;
    servicio: number;
    extension: string;
}

interface iCabelloLargo {
    cedula: string;
    servicio: number;
    permanente: string;
}

let cabelloCorto: iCabelloCorto[], cabelloLargo: iCabelloLargo[];
cabelloCorto = [
    { cedula: "22", servicio: 2, extension: "NO"},
    { cedula: "11", servicio: 1, extension: "SI"},
    { cedula: "55", servicio: 1, extension: "NO"},
    { cedula: "88", servicio: 3, extension: "SI"},
];
cabelloLargo = [
    { cedula: "44", servicio: 2, permanente: "SI"},
    { cedula: "33", servicio: 3, permanente: "NO"},
    { cedula: "77", servicio: 1, permanente: "NO"},
    { cedula: "66", servicio: 3, permanente: "SI"},
];

export { cabelloCorto, cabelloLargo };