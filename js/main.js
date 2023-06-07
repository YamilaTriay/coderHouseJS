// let productos = document.querySelector("#productos-plantas");

// fetch("data.json")
// .then((resp) => resp.json())
// .then((data) => {
//     console.log(data.results);

//     data.map((item) => {
//         const content = document.createElement("div");
//         content.innerHTML = `
//         <h4>${item.nombre}</h4>
//         <h4>${item.precio}</h4>
//         <img src="${item.img}"></img>
//         `;
//         productos.append(content);

//     });
// });


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProductos = async () => {
    const response = await fetch("data.json");
    const data = await response.json();

    data.forEach((productos)=> {
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
    
        comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProductos) => repeatProductos.id === productos.id);

        if (repeat){
            carrito.map((prod) => {
                if(prod.id === productos.id) {
                    prod.cantidad++;
                }
            });
        }else{
            carrito.push({
                id : productos.id,
                img: productos.img,
                nombre: productos.nombre,
                precio: productos.precio,
                cantidad: productos.cantidad,
            });
        }
            console.log(carrito);
            carritoCounter();
        });
    });
    
    const pintarCarrito = () => {
        modalContainer.innerHTML = "";
        modalContainer.style.display = "flex";
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header"
        modalHeader.innerHTML = `
            <h1 class="modal-header-title">Carrito.</h1>
        `;
        modalContainer.append(modalHeader);
    
        const modalbutton = document.createElement("h1");
        modalbutton.innerText = "✖";
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
                <p>Cantidad: ${productos.cantidad}</p>
                <p>Total: $${productos.cantidad *productos.precio}</p>
                `;
    
            modalContainer.append(carritoContenido);

            console.log(carrito.length);

            let eliminar = document.createElement("span");
            eliminar.innerText = "✖";
            eliminar.className = "delete-product";
            carritoContenido.append(eliminar);

            eliminar.addEventListener("click", eliminarProducto);
        });
    
        const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    
        const totalBuying = document.createElement("div");
        totalBuying.className = "total-content";
        totalBuying.innerHTML =  `total a pagar: $ ${total} `;
        modalContainer.append(totalBuying);
    };

    verCarrito.addEventListener("click", pintarCarrito);

    const eliminarProducto = () => {
        const foundId = carrito.find ((element) => element.id);

        carrito = carrito.filter((carritoId) => {
            return carritoId !== foundId;
        });
        carritoCounter();
        pintarCarrito();
    };

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
}
};

getProductos();

