export const obtenerProductoPorId = (id) =>{
    return productos.find(producto => Number(producto.id) === Number(id)) 
}

/* 
Una funcion que se llame obtenerProductos
Va a llamar a los productos del localStorage, si no estan va a cargarlos con la key 'produtos' y va a retornalos
Si estan, los parseara y los retornara
*/

/* 
localStorage

.setItem()
.getItem()
.removeItem()
.clear()
*/

const guardarProductos = () =>{
    const productos_JSON = JSON.stringify(productos)
    localStorage.setItem('productos', productos_JSON )
}

export const obtenerProductos = () =>{
    const productos_guardados = localStorage.getItem('productos')
    if(productos_guardados){
        
        return JSON.parse(productos_guardados)
    }
    else{
        guardarProductos(productos)
        return productos
    }

}

export const crearProducto = (nuevo_producto) => {
    const lista_productos = obtenerProductos()
    lista_productos.push(nuevo_producto)
    guardarProductos(lista_productos)
}

export const eliminarProductoPorId = (id) =>{
    const lista_productos = obtenerProductos()
    const nueva_lista = lista_productos.filter(producto => Number(producto.id) !== Number(id))
    return nueva_lista
}

