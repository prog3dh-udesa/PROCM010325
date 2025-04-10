import React, { Component } from 'react'

export default class Resultados extends Component {
    constructor(props){
        super(props)
        this.state = {
            busqueda: props.match.params.busqueda,
            resultados:[]
        }  
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=16165a70d46ac6b42f11100b26969ebb`)
        .then(resp => resp.json())
        .then(data => this.setState({resultados: data.results}))
        .catch(err => console.log(err))
    }

  render() {
    return (
      <div>
        Resultados de: {this.state.busqueda}
        <section>
            {this.state.resultados.map(elm => <h1>{elm.original_title}</h1>)}
        </section>
        
    </div>
    )
  }
}
