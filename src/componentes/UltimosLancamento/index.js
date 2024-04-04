import { livors } from "./dadosUltimosLancamento"
import styled from "styled-components"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import imagemLivor from "../../imagens/livro2.png"
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
            <CardRecomenda 
             titulo="Talvez você se interesse por..."
             subtitulo="Angular 11"
             descricao="Construindo uma aplicação com a  plataforma Google"
             img={imagemLivor} />
        </UltimosLancamentoContainer>

    )

}
export default UltimosLancamento