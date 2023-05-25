
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const preciosPlantas = [
    {
        id: 1,
        nombre: "monstera deliciosa",
        precio: 2500,
        img: "https://images.squarespace-cdn.com/content/v1/5dd86eda07db674ed859c949/1623896282158-1UY4YOEMHP0OOAV4YK76/monster-deliciosa-interior-design-theodora-melnik.jpg",
    },
    {
        id: 2,
        nombre: "palo de agua",
        precio: 1500,
        img: "https://d22fxaf9t8d39k.cloudfront.net/b2a5dc9597d9fe1ef0ee33c92b03ed8e04d77f28ec86108cb842e6463bf9a12b94052.jpeg",
    },
    {
        id: 3,
        nombre: "strelitzia Nicolai",
        precio: 7000,
        img: "https://static.wixstatic.com/media/708f89_65caeee11d3d4e218faf878f4eb89672~mv2.jpg/v1/fill/w_600,h_877,al_c,q_85/708f89_65caeee11d3d4e218faf878f4eb89672~mv2.jpg",
    },
    {
        id: 4,
        nombre: "palmito",
        precio: 1200,
        img: "https://plantasfaitful.com.ar/wp-content/uploads/2020/04/Plantas-Faitful-Plantas-Interior-palmera-palmito-m12.jpg",
    },
    {
        id: 5,
        nombre: "agave",
        precio: 800,
        img: "https://e3f5r4c7.rocketcdn.me/wp-content/uploads/2023/01/74010010_2.jpg",
    },
    {
        id: 6,
        nombre: "aloe vera",
        precio: 750,
        img: "https://images.hola.com/imagenes/decoracion/20230216226399/aloe-vera-cuidados-reproduccion-plantas-interior-exterior-il/1-203-969/cuidar-aloe-vera-01m-m.jpg?tx=w_680",
    },
    {
        id: 7,
        nombre: "sansevieria",
        precio: 900,
        img: ""
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

