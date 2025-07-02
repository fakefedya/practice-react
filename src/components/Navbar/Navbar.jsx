import './Navbar.css'

function Navbar({ movieCount }) {
	const NAVIGATION_LINKS = [
		{
			id: 1,
			text: 'Поиск фильмов',
			href: '/search',
		},
		{
			id: 2,
			text: 'Мои фильмы',
			href: '/films',
		},
		{
			id: 3,
			text: 'Войти',
			href: '/login',
		},
	]

	const navItem = NAVIGATION_LINKS.map((link) => (
		<li className='header__nav-item' key={link.id}>
			<a className='header__nav-item-link' href={link.href}>
				{link.id === 2 ? (
					<>
						{link.text}
						<span className='nav__item-link-badge'>{movieCount}</span>
					</>
				) : link.id === 3 ? (
					<>
						{link.text}
						<img
							className='nav__item-link-image'
							src='/public/icons/login.svg'
							alt='Иконка логина'
						/>
					</>
				) : (
					link.text
				)}
			</a>
		</li>
	))

	return (
		<nav className='header__nav'>
			<ul className='header__nav-list'>{navItem}</ul>
		</nav>
	)
}

export default Navbar
