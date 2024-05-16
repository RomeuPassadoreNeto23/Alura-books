import IconesHeader from '../IconesHeader'
import OpcoesHeader from '../OpcoesHeader'
import styled from 'styled-components'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
function Header() {
    const HeaderContainer = styled.div`
   
        background-color: #fff;
        display: flex;
        justify-content: center;

`
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>

    )
}
export default Header