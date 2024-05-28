import Input from "../Input"
import styled from "styled-components"
import { useState, useEffect } from "react"

import { getLivros } from "../../servicos/livros"

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
   `
const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
   `
const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
   `
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 300px;
        
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [LivrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()


    }, [])

    async function fetchLivros() {

        const LivrosDaAPI = await getLivros()
        setLivros(LivrosDaAPI)


    }
    return (

        <PesquisaContainer>
            <Titulo>Já sabe por onde começar!</Titulo>
            <Subtitulo>Encontre Seu Livor em na nossa estante</Subtitulo>
            <Input placeholder="Escreva sua próxima Leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livor => livor.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {LivrosPesquisados.length ==! 0 ? LivrosPesquisados.map(livorsDaPesquisa => (
                <Resultado key={livorsDaPesquisa.id}>

                    <img src={livorsDaPesquisa.img} />
                    <p>{livorsDaPesquisa.nome}</p>

                </Resultado>
            )) : null
             }



        </PesquisaContainer>


    )

}

export default Pesquisa