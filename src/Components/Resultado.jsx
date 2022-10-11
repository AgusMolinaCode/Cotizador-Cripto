import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Gemunu Libre', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 25px;
`

const Texto = styled.p`
    font-size: 20px;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display: block;
    width: 135px;
`

const Resultado = ({resultado}) => {

    const { PRICE , HIGH24HOUR, LOW24HOUR, CHANGEPCT24HOUR, IMAGEURL } = resultado
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen de la criptoseleccionada" />
        <div>
            <Precio>Su valor es de: <span>{PRICE}</span></Precio>
            <Texto>Precio mas alto de las ultimas 24hs: <span>{HIGH24HOUR}</span></Texto>
            <Texto>Precio mas bajo de las ultimas 24hs: <span>{LOW24HOUR}</span></Texto>
            <Texto>Variacion ultimas 24hs: <span>{CHANGEPCT24HOUR}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado