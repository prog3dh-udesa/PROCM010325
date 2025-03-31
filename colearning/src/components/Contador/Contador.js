import React, { Component } from 'react'

class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'Pepe',
            valorInicialContador: 0,
        }
    }

    componentDidMount(){
        this.traerRM()
    }

    traerRM(){
        fetch('https://rickandmortyapi.com/api/character')
        .then((resp) => resp.json())
        .then((data) => console.log('data RM:', data))
        .catch((e)=> console.log(e))
    }

    aumentar(valor){
        this.setState({
            valorInicialContador: this.state.valorInicialContador + valor
        })
    }

    decrecer(){
        this.setState({
            valorInicialContador: this.state.valorInicialContador - 1
        })
    }

    render(){
       return(
        <>
            <h1>
                Soy el contador {this.props.valorContador}
            </h1>
            <h2>Y tu eres el usuario {this.state.username}</h2>
            <h3>El valor actual del contador es: {this.state.valorInicialContador}</h3>
            <button onClick={() => this.aumentar(this.props.valorContador) } >
                Aumentar
            </button>
            <button onClick={() => this.decrecer() } >
                Decrecer
            </button>
        </>
       ) 
    }
}

export default Contador