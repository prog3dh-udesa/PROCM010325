import React from "react";
import {Switch, Route } from 'react-router-dom'
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import Detalle from "./screens/Detalle/Detalle";
import NotFound from "./screens/NotFound/NotFound";
import Navegacion from "./components/Navegacion/Navegacion";
import Footer from './components/Footer/Footer'
import PersonajesRM from "./screens/PersonajesRM/PersonajesRM";
import Carrito from "./screens/Carrito/Carrito";
import Resultados from "./screens/Resultados/Resultados";
function App() {
  return (
    <>
      <Navegacion />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/aboutus'} component={AboutUs} />
        <Route path={'/detalle/:id'} component={Detalle} />
        <Route path={'/personajesrm'} component={PersonajesRM} />
        <Route path={'/carrito'} component={Carrito} />
        <Route path={'/resultados/:busqueda'} component={Resultados} />
        <Route path={''} component={NotFound} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
