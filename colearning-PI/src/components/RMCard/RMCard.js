import React, { Component } from 'react'

export default class RMCard extends Component {
    constructor(props){
        super(props)
        this.state={
            dataPersonaje: props.data,
            favorito: false
        }
    }

    componentDidMount(){
      let storage= localStorage.getItem('carrito')
      if(storage !== null){
        let storageParseado = JSON.parse(storage)
        let estaMiId = storageParseado.includes(this.state.dataPersonaje.id)

        if(estaMiId){
          this.setState({favorito: true})
        }
      }
    }

    agregarAlCarrito(id){
      let storage = localStorage.getItem('carrito')
      if(storage !== null){
        let arrParseado = JSON.parse(storage)
        arrParseado.push(id)
        let arrStringificado = JSON.stringify(arrParseado)
        localStorage.setItem('carrito', arrStringificado)
      } else {
        let primerID = [id]
        let arrStringificado = JSON.stringify(primerID)
        localStorage.setItem('carrito', arrStringificado)
      }

      this.setState({
        favorito: true
      })
    }

    sacarDelCarrito(id){
      const storage = localStorage.getItem('carrito')
      const storageParseado = JSON.parse(storage)
      const filtrarStorage = storageParseado.filter((elm) => elm !== id )
      const storageStringificado = JSON.stringify(filtrarStorage)
      localStorage.setItem('carrito', storageStringificado)
      this.setState({
        favorito: false
      })

      if(this.props.borrarDeCarrito !== undefined){
        this.props.borrarDeCarrito(id)
      }

    }

  render() {
    return (
      <div>
        <h1>{this.state.dataPersonaje.name}</h1>
        <img src={this.state.dataPersonaje.image} />
        {
          this.state.favorito ?
          <button onClick={()=> this.sacarDelCarrito(this.state.dataPersonaje.id) }>Sacar del carrito</button>
          :
          <button onClick={() => this.agregarAlCarrito(this.state.dataPersonaje.id)}>Agregar al carrito</button>
        }
      </div>
    )
  }
}
