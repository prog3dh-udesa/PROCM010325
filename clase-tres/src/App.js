import React from "react";
import Header from "./components/Header/Header";

function App() {
  let username ={
    name:'Rosa',
    streamFavs: ['Olga', 'LuzuTV', 'Vorterix']
  }
  return (
    <React.Fragment>
      <Header  />
      <section >
        <div className='' >
          <h1>Bienvenido usuario: {username.name} </h1>
        </div>
        <div>
          <h2>Tus Streams favoritos son:</h2>
          <ul>
            {
              username.streamFavs.map((elm) => <li>{elm}</li> )
            }
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
