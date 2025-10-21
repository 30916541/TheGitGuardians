interface iLibroNino {
    codigo: string;
    precio: number;
    ilustrado: string;
}

interface iLibroAdolescente {
    codigo: string;
    precio: number;
    saga: string;
}

let libroNino: iLibroNino[], libroAdolescente: iLibroAdolescente[];

libroNino = [
    { codigo: "11", precio: 100, ilustrado: "No" },
    { codigo: "20", precio: 80, ilustrado: "Si" },
    { codigo: "55", precio: 60, ilustrado: "Si" },
    { codigo: "77", precio: 50, ilustrado: "No" },
];

libroAdolescente = [
    { codigo: "22", precio: 40, saga: "Si" },
    { codigo: "33", precio: 25, saga: "Si" },
    { codigo: "44", precio: 120, saga: "Si" },
    { codigo: "88", precio: 32, saga: "No" },
];

export { libroNino, libroAdolescente };