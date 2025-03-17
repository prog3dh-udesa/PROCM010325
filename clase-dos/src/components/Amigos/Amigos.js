import React from "react";
import {Link} from 'react-router-dom'
function Amigos(props){
    return(
        <section>
            {
                props.arrAmigos.map((amigo)=> <div>
                    <Link to={`/amigos/${amigo.id}` }>
                        <h2>{amigo.name}</h2>
                    </Link>
                    <h3>{amigo.sesion}</h3>
                </div>)
            }
        </section>
    )
}

export default Amigos