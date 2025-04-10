import React, { Component } from 'react'
import RMCard from '../../components/RMCard/RMCard'

export default class Carrito extends Component {
    constructor(props){
        super(props)
        this.state = {
            personajesCarrito: [],
            hayElementosEnElCarrito: false
        }
    }

    componentDidMount(){
        const storageCarrito = localStorage.getItem('carrito')
        if(storageCarrito !== null){
            let carritoParseado = JSON.parse(storageCarrito)
            if(carritoParseado.length > 0){
                Promise.all(
                    carritoParseado.map((elm) => 
                        fetch('https://rickandmortyapi.com/api/character/' + elm)
                        .then((resp) => resp.json())
                        .catch(e => console.log(e))
                    )
                )
                .then((data) => this.setState({
                    personajesCarrito: data,
                    hayElementosEnElCarrito: true
                }))
                .catch(e => console.log(e))
            }
        }
    }

    filtrarPersonajesCarrito(id){
        const personajesFiltrados = this.state.personajesCarrito.filter(
            elm => elm.id !== id
        )
        this.setState({personajesCarrito: personajesFiltrados})
    }

    render() {
        return (
        <div>
            {
                this.state.personajesCarrito.length > 0 
                ?
                this.state.personajesCarrito.map((elm, idx)=> 
                    <RMCard 
                        data={elm} 
                        key={idx + elm.name} 
                        borrarDeCarrito={(id)=> this.filtrarPersonajesCarrito(id)} 
                    />)
                :
                this.state.hayElementosEnElCarrito === false ? 
                    <h1>El carrito esta vacio</h1>
                :
                <h1>
                    Cargando Carrito
                </h1>
            }
        </div>
        )
    }
}
