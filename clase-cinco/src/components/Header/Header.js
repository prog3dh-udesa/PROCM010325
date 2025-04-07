import React from "react";
import OpcionesMenu from "./OpcionesMenu";

function Header() {
    console.log('a change')
    let opciones = [
        {
            name:'Home',
            path: '/'
        },
        {
            name:'About us',
            path: '/about'
        },
        {
            name:'Careers',
            path: '/'
        },
        {
            name:'Curso HTML y CSS',
            path: '/'
        },
        {
            name:'Curso React',
            path: '/'
        },
    ]
    return (
        <header>
            <h1>Soy el header</h1>
            <OpcionesMenu manzana={opciones} />
        </header>
    )
}

export default Header