import styles from './Navbar.module.css'
import cn from 'classnames'

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
		<li className={cn(styles['nav-item'])} key={link.id}>
			<a className={cn(styles['item-link'])} href={link.href}>
				{link.id === 2 ? (
					<>
						{link.text}
						<span className={cn(styles['link-badge'])}>{movieCount}</span>
					</>
				) : link.id === 3 ? (
					<>
						{link.text}
						<img src='/public/icons/login.svg' alt='Иконка логина' />
					</>
				) : (
					link.text
				)}
			</a>
		</li>
	))

	return (
		<nav>
			<ul className={cn(styles['nav-list'])}>{navItem}</ul>
		</nav>
	)
}

export default Navbar
