import React, { useState } from 'react'
import { useGlobalContext } from '../../Context/GlobalContext'

const NewProduct = () => {
    /* nombre: "Lavadora Automática",
    descripcion: "Lava tu ropa con facilidad con esta lavadora automática",
    precio: 30000,
    id: 8,
    stock: 14,
    codigo: "LAV-AUTOMATICA",
    categoria: "Hogar",
    thumbnail: '/imagenes/laptop.jpg' */
    const {handleCreateProduct} = useGlobalContext()
    const CATEGORIAS_DISPONIBLES = [
        'tecnologia',
        'deporte',
        'hogar'
    ]

    const [formValues, setFormValues] = useState(
        {
            categoria: ''
        }
    )
    const handleChangeValue = (e) =>{
        const nameInput = e.target.name
        const selectedOption = e.target.value
        setFormValues({...formValues, [nameInput]: selectedOption}) 
    }
    console.log(formValues)
  return (
    <div>
        <h1>Crear producto</h1>
        <form onSubmit={handleCreateProduct}>
            <div>
                <label htmlFor='nombre'>Nombre del producto</label>
                <input type="text" name='nombre' id='nombre' />
            </div>
            <div>
                <label htmlFor='descripcion'>Ingrese una descripcion</label>
                <input type="text" name='descripcion' id='descripcion' />
            </div>
            <div>
                <label htmlFor="precio">Precio</label>
                <input type="text" name='precio' id='precio'/>
            </div>
            <div>
                <label htmlFor='stock'>Stock</label>
                <input type="text" name='stock' id='stock' />
            </div>
            <div>
                <label htmlFor='codigo'>Ingrese el codigo</label>
                <input type="text" name='codigo' id='codigo'/>
            </div>
            <div>
                <label htmlFor='categoria'>Seleccione una categoria</label>
                <select name='categoria' id='categoria' onChange={handleChangeValue} value={""}>
                    {CATEGORIAS_DISPONIBLES.map((categoria, index) => 
                        <option key={index + categoria} value={categoria} /* selected={categoria === formValues.categoria} */>{categoria}</option>
                    )}
                    <option value={''} /* selected={formValues.categoria === null} */>No seleccionado</option>
                </select>
                
            </div>
            <div>
                <label htmlFor='thumbnail'>Ingrese la direccion de la imagen</label>
                <input type="text" name='thumbnail' id='thumbnail' />
            </div>
            <input type="submit" value='crear producto'/>
        </form>
    </div>
  )
}

export default NewProduct