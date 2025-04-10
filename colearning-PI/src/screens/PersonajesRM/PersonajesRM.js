import react, {Component} from "react";
import RMCard from "../../components/RMCard/RMCard";
import FiltroRM from "../../components/FiltroRM/FiltroRM";
class PersonajesRM extends Component {
    constructor(props){
        super(props)
        this.state = {
            personajes: [],
            backupPersonajes: [],
            paginaActual:0
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then(( data ) => {
            console.log('data ver todas', data)
            this.setState({
            personajes:data.results, 
            backupPersonajes: data.results,
            paginaActual: 1
        })
        })
        .catch((error) => console.log(error) )
    }

    filtrarPersonajes(busquedaUsuario){
        const personajesFiltrados = this.state.backupPersonajes.filter(
            (elm) => elm.name.toLowerCase().includes(busquedaUsuario.toLowerCase())
        )
        this.setState({personajes: personajesFiltrados})
    }

    cargarMas(){
        fetch(`https://rickandmortyapi.com/api/character?page=${this.state.paginaActual + 1}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            personajes: this.state.backupPersonajes.concat(data.results),
            backupPersonajes: this.state.backupPersonajes.concat(data.results),
            paginaActual: this.state.paginaActual + 1
        }))
    }

    render(){
        return(
            <>
            <h1>Soy los personajes de RM</h1>
            <FiltroRM filtro={(busqueda) => this.filtrarPersonajes(busqueda)} />
            {
                this.state.personajes.length === 0 ?
                <h1>Cargando personajes de RM</h1>
                :
                this.state.personajes.map((elm, idx) => <RMCard data={elm} key={idx + elm.name} /> )

            }
            <button
             onClick={()=> this.cargarMas()}
            >Cargar mas RM's</button>
            </>
        )
    }
}

export default PersonajesRM