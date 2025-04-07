import React from "react";
import {Link} from 'react-router-dom'

function Ficha(props){
    return(
        <article className="data-detail">
            <div className="card-content">
                <Link to={`/detalle/${props.data.id}`}>
                    <h4>{props.data.title}</h4>
                </Link>
                <p>{props.data.text}</p>
            </div>
            <i className={`fas ${props.data.icon} fa-2x text-gray-300`}></i>
        </article>
    )
}

export default Ficha