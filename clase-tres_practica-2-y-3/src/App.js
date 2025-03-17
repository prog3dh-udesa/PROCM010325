import React from "react";
import Navegacion from "./components/Navegacion/Navegacion";
import SeccionFichas from "./components/SeccionFichas/SeccionFichas";
import SeccionCategorias from "./components/SeccionCategorias/SeccionCategorias";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <React.Fragment>
      <Navegacion />
      <h1>My App in React</h1>
    <main>
      <SeccionFichas />
      <h2>Categories in database</h2>
      <SeccionCategorias />
    </main>
    <Footer />
    </React.Fragment>
  );
}

export default App;
