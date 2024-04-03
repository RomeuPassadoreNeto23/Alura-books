import { livors } from "./dadosUltimosLancamento"
import styled from "styled-components"
const UltimosLancamentoContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const Titulo = styled.h2`
        width: 100%;
        padding: 30px 0;
        background-color: #FFF;
        color: #EB9B00;
        font-size: 36px;
        text-align: center;
        margin: 0;
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
            <Titulo>ULTIMOS LANÇAMENTO</Titulo>
            <NovosLivorContainer>
                {livors.map(livor => (
                    <img src={livor.src} />
                ))}
            </NovosLivorContainer>
        </UltimosLancamentoContainer>

    )

}
export default UltimosLancamento