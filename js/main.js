

function solicitarNombre() {
    let nombre = prompt("Ingrese su nombre: ");
    let ingreso = prompt("Si desea comprar ingrese SI, de lo contrario ESC para salir");

    if (ingreso == "SI" || "si") {
    alert("Bienvenido/a: " +  nombre);
    } else {
    alert("Adios " + nombre);
    }
}

solicitarNombre();

let catalogo =  prompt("Ingrese la seccion de plantas que desea ver: interior, exterior o suculentas");

switch (catalogo) {
    case "interior":
        alert("1-Monstera deliciosa, 2-Palo de agua, 3-Strelitzia Nicolai, 4-Palmito")
        break;

    case "exterior":
        alert("1-Agave, 2-Aloe vera, 3-Sansevieria, 4-Chlorophytum")
        break;

    case"suculentas":
        alert("1-Echeveria lola, 2-Lauii, 3-Graptopetalum, 4-Agavoides")
        break;

    default:
}

const preciosPlantas = [
    {
        nombre: "monstera deliciosa",
        precio: 2500
    },
    {
        nombre: "palo de agua",
        precio: 1500
    },
    {
        nombre: "strelitzia Nicolai",
        precio: 7000
    },
    {
        nombre: "palmito",
        precio: 1200
    },
    {
        nombre: "agave",
        precio: 800
    },
    {
        nombre: "aloe vera",
        precio: 750
    },
    {
        nombre: "sansevieria",
        precio: 900
    },
    {
        nombre: "chlorophytum",
        precio: 500
    },
    {
        nombre: "echeveria lola",
        precio: 1200
    },
    {
        nombre: "lauii",
        precio: 1800
    },
    {
        nombre: "graptopetalum",
        precio: 350
    },
    {
        nombre: "agavoides",
        precio: 400
    },
];

let plantaElegida = prompt("Ingrese la planta que desea comprar: ");
console.log(preciosPlantas.filter ((plantas) => plantas.nombre === plantaElegida));

alert (plantaElegida);




