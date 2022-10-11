import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: tomato;
    color: white;
    padding: 10px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Gemunu Libre', sans-serif;
    font-weight: 700;
    text-align: center;
    border-radius: 12px;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error