import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { productos } from '../../Data/productsData'

const ProductList = () => {
  return (
    <div>
        {productos.map((producto) => {
            return (
                <ProductCard producto={producto} key={producto.id}/>
            )
        })}
    </div>
  )
}

export default ProductList