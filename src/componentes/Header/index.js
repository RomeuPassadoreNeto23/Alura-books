import IconesHeader from '../IconesHeader'
import OpcoesHeader from '../opcoesHeader'
import styled from 'styled-components'
import Logo from '../Logo'
function Header() {
    const HeaderContainer = styled.div`
   
        background-color: #fff;
        display: flex;
        justify-content: center;

`
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>

    )
}
export default Header