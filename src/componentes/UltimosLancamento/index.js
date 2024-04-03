import { livors } from "./dadosUltimosLancamento"
import styled from "styled-components"
import { Titulo } from "../Titulo"
const UltimosLancamentoContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivorContainer = styled.div`
    margin-top: 40px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamento() {

    return (
        <UltimosLancamentoContainer>
            <Titulo cor="#EB9B00"
                    tamanhoFonte="36px" 
                    alinhamento="center"
            >ÚLTIMOS LANÇAMENTO</Titulo>
            <NovosLivorContainer>
                {livors.map(livor => (
                    <img src={livor.src} />
                ))}
            </NovosLivorContainer>
        </UltimosLancamentoContainer>

    )

}
export default UltimosLancamento