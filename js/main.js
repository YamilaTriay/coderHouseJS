

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
            <h1 class="modal-header-title">Productos seleccionados:</h1>
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
        totalBuying.innerHTML =  `Total a pagar: $ ${total} `;
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


Swal.fire({
    title: 'En este sitio encontrarás todo tipo de plantas para tu hogar. ¿Deseas continuar para comprar?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Continuar',
    denyButtonText: `No, gracias`,
}).then((result) => {
    if (result.isConfirmed) {
    Swal.fire('¡Bienvenido!', '', 'success')
    } else if (result.isDenied) {
    Swal.fire('Esperamos que vuelvas pronto', '', 'info')
    }
})

Swal.fire (
    {
        title: 'Bienvenido, ¿Deseas comprar?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        confirmButtonColor: '#87a39a',
        denyButtonText: 'no',
        denyButtonColor: '#57857b',
        iconHtml: '<i class="bi bi-bag-heart"></i>',
        iconColor: '#c1d9d4 ',
        footer: '<span class="libreria">Selecciona una opción para continuar.</span>'
    }
);


