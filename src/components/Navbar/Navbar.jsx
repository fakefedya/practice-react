import styles from './Navbar.module.css'
import cn from 'classnames'

function Navbar({ userName, movieCount, onLogout }) {
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
		...(userName
			? [
					{
						id: 3,
						text: userName,
						href: '/',
					},
			  ]
			: []),
		{
			id: 4,
			text: userName ? 'Выход' : 'Войти',
		},
	]

	const navItem = NAVIGATION_LINKS.map((link) => (
		<li className={cn(styles['nav-item'])} key={link.id}>
			{link.id === 4 ? (
				<button
					className={cn(styles['item-link'], styles['logout-button'])}
					onClick={() => (userName && onLogout ? onLogout() : null)}
				>
					{link.text}
					{userName && (
						<img src='/public/icons/login.svg' alt='Иконка профиля' />
					)}
				</button>
			) : (
				<a className={cn(styles['item-link'])} href={link.href}>
					{link.id === 2 ? (
						<>
							{link.text}
							<span className={cn(styles['link-badge'])}>{movieCount}</span>
						</>
					) : (
						link.text
					)}
				</a>
			)}
		</li>
	))

	return (
		<nav>
			<ul className={cn(styles['nav-list'])}>{navItem}</ul>
		</nav>
	)
}

export default Navbar
