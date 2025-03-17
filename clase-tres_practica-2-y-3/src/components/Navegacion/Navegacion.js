import React from 'react'
import OpcionesMenu from './OpcionesMenu'
import './styles.css'

function Navegacion(){
    const opciones = [
        {
            nombre: 'ADMIN',
            path:'/'
        },
        {
            nombre: 'Pages',
            path:'/pages'
        },
        {
            nombre: 'Charts',
            path:'/charts'
        },
        {
            nombre: 'Tables',
            path:'/tables'
        },
    ]
    return(
    <nav>
        <OpcionesMenu opciones={opciones} />
        <ul className="user">
            <li>Nombre usuario 
                <img src="./img/user.jpg" alt="" />
            </li>
        </ul>
    </nav>
    )
}

export default Navegacion