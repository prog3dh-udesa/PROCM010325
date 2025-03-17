import React from 'react'
import SeccionFichas from "../../components/SeccionFichas/SeccionFichas";
import SeccionCategorias from "../../components/SeccionCategorias/SeccionCategorias";

function Home(){
    return(
    <React.Fragment>
      <h1>My App in React</h1>
    <main>
      <SeccionFichas />
      <h2>Categories in database</h2>
      <SeccionCategorias />
    </main>
    </React.Fragment>
    )
}

export default Home