import React from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { productos } from '../../Data/productsData'
import { obtenerProductoPorId, eliminarProductoPorId} from '../../Helpers/productos'
import { useGlobalContext } from '../../Context/GlobalContext'

const Detail = () => {
    const parametros = useParams()
    const {handleDeleteProduct} = useGlobalContext()
    console.log(parametros)


    const producto =  obtenerProductoPorId(parametros.product_id)
    
    
    
    return (
        <div>
            {
                producto 
                ? 
                    <div>
                        <h1>{nombre}</h1>
                        <img src={producto.thumbnail} alt="razer" />
                        <span>Categoria: {producto.categoria}</span>
                        <p>
                            {producto.descripcion}
                        </p>
                        <span>
                            <b>Precio</b>:{producto.precio}
                        </span>
                        <br />
                        <span>
                            <b>Unidades disponibles</b>:{producto.stock}
                        </span>
                        <br />
                        <button>Comprar</button>
                        <button onClick={() => handleDeleteProduct(id)} style={{color: 'red'}}>Eliminar</button>
                    </div>
                :
                <>
                <h2>no se encontro producto con ese id</h2>
                <Link to={'/'}>Ir a inicio</Link>
                </>
                
            }
        </div>
    )
}

export default Detail