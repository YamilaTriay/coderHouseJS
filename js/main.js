

function solicitarNombre() {
    let nombre = prompt("Ingrese su nombre: ");
    let ingreso = prompt("Si desea comprar ingrese SI, de lo contrario ESC para salir");

    if (ingreso == "SI") {
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