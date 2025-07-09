import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import './Header.css'

function Header({ userName, onLogout }) {
	return (
		<header className='header'>
			<div className='header__container'>
				<Logo />
				<Navbar userName={userName} onLogout={onLogout} movieCount={2} />
			</div>
		</header>
	)
}

export default Header
