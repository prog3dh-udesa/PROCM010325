import react, {Component} from "react";

class PersonajesRM extends Component {
    constructor(props){
        super(props)
        this.state = 
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then(( data ) => console.log('data', data))
        .catch((error) => console.log(error) )
    }

    render(){
        return(
            <h1>Soy los personajes de RM</h1>
        )
    }
}

export default PersonajesRM