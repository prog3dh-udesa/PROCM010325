import React from 'react'
import SeccionFichas from "../../components/SeccionFichas/SeccionFichas";
import SeccionCategorias from "../../components/SeccionCategorias/SeccionCategorias";
import Usuario from '../../components/Usuario/Usuario';
function Home(){
    return(
    <React.Fragment>
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