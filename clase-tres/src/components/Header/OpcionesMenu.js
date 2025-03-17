import React from "react";

function OpcionesMenu(props) {
    return (
        <ul>
            {
                props.manzana.map((elm, idx) => <li key={idx + "-" + elm.name }>{elm.name}</li> )
            }
        </ul>
    )
}

export default OpcionesMenu