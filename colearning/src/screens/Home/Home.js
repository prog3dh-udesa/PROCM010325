import React from 'react'
import SeccionFichas from "../../components/SeccionFichas/SeccionFichas";
import SeccionCategorias from "../../components/SeccionCategorias/SeccionCategorias";
import Contador from '../../components/Contador/Contador';
import { movies } from '../../utils/moviesArray';
function Home(props){
  console.log('movies', movies)
  console.log('las props de la home', props)
    return(
    <React.Fragment>
      <Contador valorContador={100} />
      <h1>My App in React</h1>
    <main>
      <SeccionFichas history={props.history} />
      <h2>Categories in database</h2>
      <SeccionCategorias />
    </main>
    </React.Fragment>
    )
}

export default Home