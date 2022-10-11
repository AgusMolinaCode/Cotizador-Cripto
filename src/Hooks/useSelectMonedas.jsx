import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: whitesmoke;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0;
    font-family: 'Gemunu Libre', sans-serif;
    text-align: center;
`

const Select = styled.select `
    width: 100%;
    font-size: 18px;
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 20px;
`

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')
  
    const selectMonedas = () => (
    <>
        <Label>{label}</Label>
        <Select
            value={state}
            onChange={ e => setState(e.target.value) }
        >
            <option value="">Seleccione</option>

            {opciones.map( opcion => (
                <option
                    key={opcion.id}
                    value={opcion.id}
                >{opcion.nombre}</option>


            ))}
        </Select>
    </>
  
)

  

  return [ state,selectMonedas ]
}

export default useSelectMonedas