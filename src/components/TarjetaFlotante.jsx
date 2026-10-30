import Tarjeta from "./Tarjeta"
import { useState, useEffect, useContext} from 'react'
import { InfoPokemonContext } from "../context/InfoPokemonContext"

export default function TarjetaFlotante(){
    const [infoPokemonFlotante, setInfoPokemonFlotante] = useState({})
    const {idPok} = useContext(InfoPokemonContext)

    useEffect(() => {
        function obtenerInfoApi(identificador, infoPok){
            setInfoPokemonFlotante(infoPok[2])
        }
        obtenerInfoApi(idPok);
    }, [])

    function ocultarVentana(){
        const popUp = document.getElementsByClassName('ventanaFlotante')[0]
        popUp.style.display = 'none'
        const tarjetaFlotante = popUp.children[0]
        tarjetaFlotante.classList.remove('tarjetaFlotante')
        setInfoPokemonFlotante(0)
    }

    return(
        <>
            <div className="ventanaFlotante" onClick={() => ocultarVentana()}>
                {infoPokemonFlotante.id && <Tarjeta infoPokemon={infoPokemonFlotante} />}
            </div>
        </>
    )
}