import React from "react";
import {Switch, Route} from 'react-router-dom'
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import AboutUs from "./screens/AboutUs";
import Header from './components/Header/Header'
import Detalle from "./screens/Detalle";

function App() {
  return(
    <>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home}  />
        <Route path ='/aboutus' component={AboutUs} />
        <Route path='/amigos/:id' component={Detalle} />
        <Route path='*' component={NotFound} />
      </Switch>
    </>
  )
}

export default App;
