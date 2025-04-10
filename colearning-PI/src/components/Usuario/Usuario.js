import React, {Component} from 'react'

class Usuario extends Component{
    constructor(){
        super()
        this.state={
            valorContador: 0,
        }
    }

    saludar(){
        console.log('Hola usuario Pepe')
    }

    aumentar(){
        this.setState({
            valorContador: this.state.valorContador + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Soy el usuario Pepe</h1>
                <button onClick={() => this.saludar()} >Saludar</button>
                <h1>Este es mi contador</h1>
                <h2>
                    {
                        this.state.valorContador
                    }
                </h2>
                <button onClick={() => this.aumentar() } >Aumentar</button>

            </div>
        )
    }

}

export default Usuario