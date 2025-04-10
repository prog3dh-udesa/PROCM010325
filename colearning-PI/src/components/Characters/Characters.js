import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import personajes from "./data";

function Characters(){
    
    return(
        <>
            <h1>Soy los Characters</h1>
            {
                personajes.map((elm, idx)=> <CharacterCard data={elm} />)
            }
        </>
    )
}

export default Characters