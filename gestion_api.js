
const API_URL = "http://localhost:3000/productos"
let listar = document.getElementById("listar")
let agregar = document.getElementById("agregar")
let actualizar = document.getElementById("actualizar")
let eliminar = document.getElementById("eliminar")

listar.addEventListener("click", () => obtenerProductos())
agregar.addEventListener("click", () => agregarProducto())
actualizar.addEventListener("click", () => actualizarProducto())
eliminar.addEventListener("click", () => eliminarProducto())


async function obtenerProductos() {
    try {
        let response = await fetch(API_URL);
        let data = await response.json();
        console.log("Productos:", data);
    } catch (error) {
        console.error("Error el obtener los productos", error);
    }    
}

async function agregarProducto() {
    try {
        let response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(nuevoProducto)
        })  
        const resultado = await response.json();
        console.log("Producto añadido:", resultado);
    } catch (error) {
        console.error("Se produjo un error", error);
    }
}

async function actualizarProducto() {

    try {
        let response = await fetch(`${API_URL}/1`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(actProducto)
        })  
        const resultado = await response.json();
        console.log("Producto actualizado:", resultado);
    } catch (error) {
        console.error("Se produjo un error", error);
    }
}

async function eliminarProducto() {
    try {
        let response = await fetch(`${API_URL}/4`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json"}
        })
        const resultado = await response.json();
        console.log("Producto eliminado", resultado);
    } catch (error) {
        console.error("Se produjo un error", error);
    }
}

const nuevoProducto = {
     "id": "4", 
     "nombre": "Monitor", 
     "precio": 2500 
    };
const actProducto = {
     "id": 0, 
     "nombre": "Gafas", 
     "precio": 200 
    };

/*fetch("http://localhost:3000/productos")
    .then(response => response.json())
    .then(data => console.log("productos disponibles: ", data))
    .catch(error => console.error("Error al obtener los productos", error))


fetch('http://localhost:3000/productos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(nuevoProducto)
})
    .then(response => response.json())
    .then(data => console.log("Producto añadido", data))
    .catch(error => console.log("Se produjo un error", error))


fetch('http://localhost:3000/productos/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(actProducto)
})
    .then(response => response.json())
    .then(data => console.log("Producto añadido", data))
    .catch(error => console.log("Se produjo un error", error))


fetch("http://localhost:3000/productos", method: 'DELETE'})
    .then(() => console.log("producto eliminado "))
    .catch(error => console.error("Error al eliminar los productos", error))
*/
