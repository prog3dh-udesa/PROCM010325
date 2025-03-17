import React from "react";
import {Switch, Route } from 'react-router-dom'
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import Detalle from "./screens/Detalle/Detalle";
import NotFound from "./screens/NotFound/NotFound";
import Navegacion from "./components/Navegacion/Navegacion";
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <Navegacion />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/aboutus'} component={AboutUs} />
        <Route path={'/detalle/:id'} component={Detalle} />
        <Route path={''} component={NotFound} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
