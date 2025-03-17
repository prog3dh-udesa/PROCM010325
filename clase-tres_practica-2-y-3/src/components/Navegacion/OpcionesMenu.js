import React from 'react'

function OpcionesMenu(props) {
    return(
        <ul className='main-nav'>
            {
                props.opciones.map((elm, idx) => <li key={`${elm.nombre}-${idx}`}>{elm.nombre}</li>)
            }
        </ul>
    )
}

export default OpcionesMenu