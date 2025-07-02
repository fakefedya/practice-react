import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import './Header.css'

function Header() {
	return (
		<header className='header'>
			<div className='header__container'>
				<Logo />
				<Navbar movieCount={2} />
			</div>
		</header>
	)
}

export default Header
