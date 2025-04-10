import react, {Component} from "react";
import RMCard from "../../components/RMCard/RMCard";
class PersonajesRM extends Component {
    constructor(props){
        super(props)
        this.state = {
            personajes: []
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then(( data ) => this.setState({personajes:data.results}))
        .catch((error) => console.log(error) )
    }

    render(){
        return(
            <>
            <h1>Soy los personajes de RM</h1>
            {
                this.state.personajes.length === 0 ?
                <h1>Cargando personajes de RM</h1>
                :
                this.state.personajes.map((elm, idx) => <RMCard data={elm} key={idx + elm.name} /> )

            }
            </>
        )
    }
}

export default PersonajesRM