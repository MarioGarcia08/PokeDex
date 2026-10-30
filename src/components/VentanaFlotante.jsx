import Tarjeta from "./Tarjeta";
import { TotalPokemonsContext } from "../context/TotalPokemonsContext";

import { useContext } from 'react'

export default function VentanaFlotante(){
    const {arrayDatos, idPokemonFlotante, visibilidad, noEsVisible} = useContext(TotalPokemonsContext)
    const popUp = document.getElementsByClassName('ventanaFlotante')[0]

    function ocultarVentanaFlotante(){
        popUp.style.display='none'
        noEsVisible()
    }

    // if (!visibilidad) return null;
    return(
        <>
            <div className="ventanaFlotante" onClick={() => ocultarVentanaFlotante()}>
                {(!visibilidad ? '' :
                    <Tarjeta
                        infoPokemon={arrayDatos[idPokemonFlotante - 1]}
                    />
                )}
            </div>
        </>
    )
}