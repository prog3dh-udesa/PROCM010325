import React from "react";
import Ficha from './Ficha'
import './styles.css'
function SeccionFichas(props){
    const fichasData = [
        {
            id:1,
            title: 'Ficha 1',
            text: 'Texto ficha 1',
            icon: 'fa-clipboard-list'
        },
        {
            id:2,
            title: 'Ficha 2',
            text: 'Texto ficha 2',
            icon: 'fa-dollar-sign'
        },
        {
            id:3,
            title: 'Ficha 3',
            text: 'Texto ficha 3',
            icon: 'fa-user'
        },
    ]
    return (
        <section className="top-data">
            {
                fichasData.map((elm, idx) => <Ficha authorized={true} key={`${idx}-${elm.icon}`} data={elm} history={props.history}/> )
            }
        </section>
    )
}
export default SeccionFichas