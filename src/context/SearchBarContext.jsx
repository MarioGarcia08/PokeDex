import {createContext, useState} from 'react'

export const SearchBarContext = createContext()

export function SearchBarProvider({children}){
    const [textoBuscador, setTextoBuscador] = useState('')

    function buscarPokemon(evento){
        setTextoBuscador(evento.target.value)
    }

    return(
        <SearchBarContext.Provider value={{textoBuscador, buscarPokemon}}>
            {children}
        </SearchBarContext.Provider>
    )
}