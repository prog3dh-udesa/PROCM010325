import React, { Component } from 'react'

export default class RMCard extends Component {
    constructor(props){
        super(props)
        this.state={
            dataPersonaje: props.data
        }
    }
  render() {
    return (
      <div>
        <h1>{this.state.dataPersonaje.name}</h1>
        <img src={this.state.dataPersonaje.image} />
      </div>
    )
  }
}
