import React from 'react'
import SeccionFichas from "../../components/SeccionFichas/SeccionFichas";
import SeccionCategorias from "../../components/SeccionCategorias/SeccionCategorias";
import Usuario from '../../components/Usuario/Usuario';
import Characters from '../../components/Characters/Characters';
import { Link } from 'react-router-dom';
function Home(props){
  const redirigir = () => {
    console.log('red', props)
    props.history.push('detalle/busqueda')
  }
    return(
    <React.Fragment>
      <button onClick={redirigir}>
        redirigir
      </button>
      <Characters />
      <h1>My App in React</h1>
    <main>
      <Usuario />
      <SeccionFichas />
      <h2>Categories in database</h2>
      <SeccionCategorias />
    </main>
    </React.Fragment>
    )
}

export default Home