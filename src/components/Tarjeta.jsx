import { useState, useEffect, useContext } from 'react'
import { SearchBarContext } from '../context/SearchBarContext';
import { TotalPokemonsContext } from '../context/TotalPokemonsContext';

export default function Tarjeta({infoPokemon}){
    const {id, name, types}  = infoPokemon;
    const [infoPokemonEvo, setInfoPokemonEvo] = useState({})
    const {textoBuscador} = useContext(SearchBarContext)
    const {modificarId, esVisible} = useContext(TotalPokemonsContext)

    let nombre = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    let urlEvo = `https://pokeapi.co/api/v2/pokemon-species/${id}`

    useEffect(() => {
        async function obtenerPreevolucion() {
            const respuestaEvo = await fetch(urlEvo)
            const infoEvo = await respuestaEvo.json();
            setInfoPokemonEvo(infoEvo)
        }
        obtenerPreevolucion()
    }, [])

    function pasarId(id){
        modificarId(id)
        esVisible()
        const popUp = document.getElementsByClassName('ventanaFlotante')[0]
        popUp.style.display='flex'
    }

    return (
        !name.toLowerCase().includes(textoBuscador.toLowerCase()) && textoBuscador !== '' ? null : 
        <>
        <div className="tarjeta" onClick={() => pasarId(id)}>
            <div className="imagen">
                <img src= {url} />
                <p className="id">ID / {id}</p>
            </div>
            <div className="contenido">
                <p className="nombre">{nombre}</p>
                <div className="tipos">
                    <p className="tipo">{types[0].type.name.toUpperCase()}</p>
                    {types[1] === undefined? '' : <p className="tipo">{types[1].type.name.toUpperCase()}</p>}
                </div>
                {(infoPokemonEvo.evolves_from_species === null ? '' : 
                    <div className='preevo'>
                        <div className='palo'></div>
                        <p className='texto-evol'>Evoluciona de:</p>
                        <p className='nombre-evol'>{infoPokemonEvo.evolves_from_species?.name}</p>
                    </div>)}
            </div>
        </div>
        </>
    )
}