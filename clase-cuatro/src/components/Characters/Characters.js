import React, {Component} from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import personajes from "./data";

class Characters extends Component{
    constructor(props){
        super(props)
        this.state = {
            personajes: []
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => this.setState({personajes: data.results}))
        .catch((err)=> console.log(err))
    }

    
    render(){
        return(
            <>
                <h1>Soy los Characters</h1>
                {
                    this.state.personajes.map((elm, idx)=> <CharacterCard data={elm} />)
                }
            </>
        )
    }
}

export default Characters