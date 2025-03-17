import React from "react";

function Ficha(props){
    return(
        <article className="data-detail">
            <div className="card-content">
                <h4>{props.data.title}</h4>
                <p>{props.data.text}</p>
            </div>
            <i className={`fas ${props.data.icon} fa-2x text-gray-300`}></i>
        </article>
    )
}

export default Ficha