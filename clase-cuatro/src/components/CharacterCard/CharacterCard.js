import React, {Component} from 'react'
import './styles.css'
class CharacterCard extends Component{
    constructor(props){
        super(props)
        this.state={
            data: props.data,
            mostrarContenido: true,
        }
    }

    ocultar() {
        this.setState({
            mostrarContenido: !this.state.mostrarContenido
        })
    }

    agregarACarrito(id){
        let storage = localStorage.getItem('carrito')
        if(storage !== null){
            let arrayParseado = JSON.parse(storage)
            arrayParseado.push(id)
            let storageStringificado = JSON.stringify(arrayParseado)
            localStorage.setItem('carrito', storageStringificado)
        } else {
            let inicializarCarrito = [id]
            let arrayStringificado = JSON.stringify(inicializarCarrito)
            localStorage.setItem('carrito', arrayStringificado)
        }
    }

    render(){
        return(
            // <h1>{this.props.data.name}</h1>
            <div>
                <h1>{this.state.data.name}</h1>
                <img src={this.state.data.image} />
                <div className={this.state.mostrarContenido ? '' : 'hide'}>
                    <p>
                        {this.state.data.species}
                    </p>
                    <p>
                        {this.state.data.status}
                    </p>
                </div>
                <button onClick={() => this.ocultar()} >
                    Boton que hace magia
                </button>
            </div>
        )
    }
}
export default CharacterCard