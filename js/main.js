
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const preciosPlantas = [
    {
        "id": 1,
        "nombre": "monstera deliciosa",
        "precio": 2500,
        "img": "../img/monstera.jpg",
    },
    {
        id: 2,
        nombre: "palo de agua",
        precio: 1500,
        img: "../img/palodeagua.jpg",
    },
    {
        id: 3,
        nombre: "strelitzia Nicolai",
        precio: 7000,
        img: "../img/nicolaii.png",
    },
    {
        id: 4,
        nombre: "palmito",
        precio: 1200,
        img: "../img/palmito.jpg",
    },
    {
        id: 5,
        nombre: "agave",
        precio: 800,
        img: "../img/agave.jpg",
    },
    {
        id: 6,
        nombre: "aloe vera",
        precio: 750,
        img: "../img/aloe.jpg",
    },
    {
        id: 7,
        nombre: "sansevieria",
        precio: 900,
        img: "../img/Sansevieria.jpg"
    },
    {
        id: 8,
        nombre: "chlorophytum",
        precio: 500,
        img: "../img/malamadre.jpg",
    },
    {
        id: 9,
        nombre: "echeveria lola",
        precio: 1200,
        img: "../img/lola.jpg",
    },
    {
        id: 10,
        nombre: "lauii",
        precio: 1800,
        img: "../img/lauii.jpg",
    },
    {
        id: 11,
        nombre: "graptopetalum",
        precio: 350,
        img: "../img/graptopetalum.jpg",
    },
    {
        id: 12,
        nombre: "agavoides",
        precio: 400,
        img: "../img/agavoides.jpg",
    },
];


let carrito = [];

preciosPlantas.forEach((productos)=> {
    let contenido = document.createElement("div");
    contenido.className = "card";
    contenido.innerHTML = `
        <img src="${productos.img}">
        <h3>${productos.nombre}</h3>
        <p class="price">${productos.precio} $</p>
    `;


    shopContent.append(contenido);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    contenido.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id : productos.id,
            img: productos.img,
            nombre: productos.nombre,
            precio: productos.precio,
        });
        console.log(carrito);
    });

});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);


    carrito.forEach((productos) => {
        let carritoContenido = document.createElement("div");
        carritoContenido.className = "modal-content";
        carritoContenido.innerHTML = `
        <img src= "${productos.img}">
        <h3>${productos.nombre}</h3>
        <p>${productos.precio} $</p>
        `;

        modalContainer.append(carritoContenido);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML =  `total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
});

