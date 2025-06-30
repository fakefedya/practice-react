import './Navbar.css'

function Navbar() {
	const NAVIGATION_LINKS = [
		{
			id: 1,
			text: 'Поиск фильмов',
			href: '',
		},
		{
			id: 2,
			text: 'Мои фильмы',
			href: '',
		},
		{
			id: 3,
			text: 'Войти',
			href: '',
		},
	]
	return (
		<nav className='header__nav'>
			<ul className='header__nav-items'></ul>
		</nav>
	)
}

export default Navbar
