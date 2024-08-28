import { productos } from "../Data/productsData"

export const obtenerProductoPorId = (id) =>{
    const lista_productos = obtenerProductos()
    return productos.find(producto => producto.id === id) 
}

/* 
Una funcion que se llame obtenerProductos
Va a llamar a los productos del localStorage mediante la key 'productos', 
si no estan va a cargarlos con la key 'productos' y va a retornalos
Si estan, los parseara y los retornara

*/

/**
 * 
 * @param  {array} productos 
 *  */ 


const guardarProductos = (productos) => {
    const productos_JSON = JSON.stringify(productos)
    localStorage.setItem('productos', productos_JSON)
}
/**
 * Una función que recupera productos de localStorage utilizando la clave 'productos'. Si no se encuentran, almacena los productos con la clave 'productos'.
 *
 * @return {Array} El array de productos recuperado o almacenado en localStorage.
 */
export const obtenerProductos = () => {
    const productos_guardados = localStorage.getItem('productos')
    if(productos_guardados){

        return JSON.parse(productos_guardados)
    }
    else{

        guardarProductos(productos)
        return productos
    }
}


/* 
crearProducto(producto) 
recibe un producto y lo agrega al array de productos guardado en localStorage
Retorna la lista modificada


obtenerProductoPorId(id) retornar el producto que cumpla con ese id
eliminarProductoPorId(id) elimina el producto que cumpla con ese id
*/


export const crearProducto = (nuevo_producto /* object */) => {
    const lista_productos /* array[objetos] */ = obtenerProductos() /* array[objetos] */
    lista_productos.push(nuevo_producto)
    guardarProductos(lista_productos)
}

export const eliminarProductoPorId = (id) =>{
    const lista_productos = obtenerProductos()
    const nueva_lista = lista_productos.filter(producto => Number(producto.id) !== Number(id))
    guardarProductos(nueva_lista)
    return nueva_lista
}