import React, { useEffect } from 'react'
import ProductList from '../../Components/ProductList/ProductList'
import '../Home/Home.css'
import { productos } from '../../Data/productsData'
import {obtenerProductos, crearProducto } from '../../Helpers/productos'
import { useGlobalContext } from '../../Context/GlobalContext'
import icono from '../../assets/vite.svg'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
    const {productos, getUserData, logout, handleChangeSearchTerm, searchTerm} = useGlobalContext()
    const user = getUserData()

    
return (
    <div>
        {
            user
            ?
            <button onClick={logout}>Cerrar sesion</button>
            :
            <Link to={'/login'}>Login</Link>
        }
        {
        (user && user.role === 'admin')
        &&
        
        <>
            <Link to={'/product/new'}>Crear Producto</Link>
            <Link to={'/cart'}>Carrito</Link>
        </>
        }
        {
            (user && user.role === 'user')
            &&
            <>
                <Link>Carrito</Link>
            </>
        }

        <div className='imageContainer'>

            <img src="/imagenes/bocajuniors.png" alt="" />
        </div>
        <input onChange={handleChangeSearchTerm} value={searchTerm}/>
        <h1>Elige nuestros productos <img src={icono} alt="" /></h1>
        <ProductList productos={productos}/> 
    </div>
)
}

export default Home