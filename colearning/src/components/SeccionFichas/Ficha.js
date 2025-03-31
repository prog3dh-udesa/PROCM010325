import React, {Component} from "react";
import {Link} from 'react-router-dom'

class Ficha extends Component{
    constructor(props){
        super(props)
        this.state={
            estaHaciendoOver: false
        }
    }

    redirigir(){
        if(this.props.authorized){
            this.props.history.push(`/detalle/${this.props.data.id}`)
        } else {
            this.props.history.push(`/notfound`)
        }
    }

    toggleClass(){
        this.setState({
            estaHaciendoOver: !this.state.estaHaciendoOver
        })
    }

    render(){
        return(
            <article 
                onMouseOver={()=> this.toggleClass() } 
                onMouseOut={() => this.toggleClass()}
                onClick={()=> this.redirigir()} 
                className={`data-detail ${this.state.estaHaciendoOver ? 'over' : '' }`}
            >
                <div className="card-content">
                    {/* <Link to={`/detalle/${this.props.data.id}`}> */}
                        <h4>{this.props.data.title}</h4>
                    {/* </Link> */}
                    <p>{this.props.data.text}</p>
                </div>
                <i className={`fas ${this.props.data.icon} fa-2x text-gray-300`}></i>
            </article>
        )
    }
}

export default Ficha