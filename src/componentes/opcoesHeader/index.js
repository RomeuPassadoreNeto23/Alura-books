
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Opcao = styled.li`
    display: flex;
    font-size: 16px;
    min-width: 120px;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'ESTANTE', 'FAVORITOS']

function OpcoesHeader() {

    return (
        <Opcoes>
            {textoOpcoes.map((texto,) => (
                <Link to={`${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
            ))}
        </Opcoes>
    )

}
export default OpcoesHeader