import React from "react";

function Detalle(props) {
    const id = props.match.params.id
    return(
        <section>
            Soy el detalle del amigo con id {id}
        </section>
    )
}
export default Detalle