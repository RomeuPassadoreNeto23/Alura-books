import './estilo.css'
import IconesHeader from '../IconesHeader'
import OpcoesHeader from '../opcoesHeader'
import Logo from '../Logo'
function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </header>
    )
}
export default Header