import SearchBar from "./SearchBar"
import Tarjeta from "./Tarjeta"
import { TotalPokemonsContext } from "../context/TotalPokemonsContext"

import { useEffect, useContext } from 'react'

export default function ListadoTarjetas(){
    const {arrayDatos, agregarDatos} = useContext(TotalPokemonsContext)
    
    useEffect(() => {
        async function obtenerInfoApi(){
            // Obtener total de Pokemons
            const respuestaGenerica = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            const totalPokemons = await respuestaGenerica.json();

            // Obtener info de cada pokemon
            const arrayTotalPokemon = []
            // PARA EVITAR ERRORES ED LLAMADAS API, HACER PAGINACIÓN, E IR MOSTRANDO TARJETAS DE 30 EN 30 (POR EJ)
            for(let i = 0; i < 30; i++){
                const respuesta = await fetch(totalPokemons.results[i].url) 
                const infoPok = await respuesta.json()
                arrayTotalPokemon.push(infoPok)
            }
            agregarDatos(arrayTotalPokemon)
        }
        obtenerInfoApi();
    }, [])

    return(
        <>
            <div className="grid-general">
                <SearchBar/>
                {arrayDatos.map((infoPokIndividual, index) => 
                    <Tarjeta
                    key={index}
                    infoPokemon = {infoPokIndividual}
                    />
                )}
            </div>
        </>
    )
}