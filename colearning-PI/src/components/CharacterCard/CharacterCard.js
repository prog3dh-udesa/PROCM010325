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

    render(){
        return(
            // <h1>{this.props.data.name}</h1>
            <div>
                <h1>{this.state.data.name}</h1>
                <img />
                <div className={this.state.mostrarContenido ? '' : 'hide'}>
                    <p>
                        {this.state.data.description}
                    </p>
                    <p>
                        {this.state.data.extra}
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