import {createContext, useState} from 'react'

export const TotalPokemonsContext = createContext()

export function TotalPokemonsProvider({children}){
    const [arrayDatos, setArrayDatos] = useState([])
    const [idPokemonFlotante, setIdPokemonFlotante] = useState(1)
    const [visibilidad, setVisibilidad] = useState(false)

    function agregarDatos(listado){
        setArrayDatos(listado)
    }

    function modificarId(id){
        setIdPokemonFlotante(id)
    }

    function esVisible(){
        setVisibilidad(true)
    }

    function noEsVisible(){
        setVisibilidad(false)
    }

    return(
        <TotalPokemonsContext.Provider value={{arrayDatos, agregarDatos, idPokemonFlotante, modificarId, esVisible, noEsVisible, visibilidad}}>
            {children}
        </TotalPokemonsContext.Provider>
    )
}