import { useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../Hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #e8e855;
    border: none;
    width: 100%;
    padding: 10px;
    color: black;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color .3s ease;
    
    &:hover {
        background-color: #b0b042;

    }

`

const Formulario = () => {

const  [ criptos, setCriptos ] = useState([])

const [ moneda,SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
const [ criptomoneda,SelectCriptomoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptos)


useEffect(() => {
    const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        

        const arrayCriptos = resultado.Data.map( cripto => {

            const objeto = {
                id: cripto.CoinInfo.Name,
                nombre: cripto.CoinInfo.FullName
            }

           return objeto
        })

        setCriptos(arrayCriptos)

    }
    consultarAPI()
}, [])


return (
    <form action="">
        <SelectMonedas  />
        <SelectCriptomoneda />

        {moneda}
        
        <InputSubmit type="submit" value='Cotizar' />

    </form>
  )
}

export default Formulario