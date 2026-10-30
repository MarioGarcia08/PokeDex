import { useContext } from "react"
import { SearchBarContext } from "../context/SearchBarContext"

export default function SearchBar(){
    const {buscarPokemon} = useContext(SearchBarContext)

    return(
        <>
            <input type="text" placeholder="Filtra Pokémons por nombre..." className="buscador" id="buscador" onChange={buscarPokemon}/>
        </>
    )
}