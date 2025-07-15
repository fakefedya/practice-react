import Button from '../Button/Button'
import styles from './Navbar.module.css'
import cn from 'classnames'
import { useUser } from '../../hooks/use-user.hook'

function Navbar() {
	const { userName, handleLogout, activeUser } = useUser()

	const NAVIGATION_LINKS = [
		{ id: 1, text: 'Поиск фильмов', href: '/search' },
		{ id: 2, text: 'Мои фильмы', href: '/films' },
		...(userName ? [{ id: 3, text: userName, href: '/' }] : []),
		{ id: 4, text: userName ? 'Выход' : 'Войти' },
	]

	const navItem = NAVIGATION_LINKS.map((link) => {
		let linkContent

		switch (link.id) {
			case 2: {
				linkContent = (
					<li className={styles['nav-item']} key={link.id}>
						<a href={link.href} className={styles['item-link']}>
							{link.text}
							<span className={styles['link-badge']}>
								{activeUser?.favoriteMovies?.length || 0}
							</span>
						</a>
					</li>
				)
				break
			}
			case 3: {
				userName
					? (linkContent = (
							<li className={styles['nav-item']} key={link.id}>
								<a href={link.href} className={styles['item-link']}>
									{userName}
									<img src='/public/icons/user.svg' alt='Иконка пользователя' />
								</a>
							</li>
					  ))
					: ''
				break
			}
			case 4: {
				linkContent = (
					<li className={styles['nav-item']} key={link.id}>
						<Button
							text={link.text}
							image={
								!userName && (
									<img src='/public/icons/login.svg' alt='Иконка профиля' />
								)
							}
							className={cn(styles['item-link'], styles['logout-button'])}
							onClick={() => (userName && handleLogout ? handleLogout() : null)}
						/>
					</li>
				)
				break
			}
			default:
				linkContent = (
					<li className={styles['nav-item']} key={link.id}>
						<a href={link.href} className={styles['item-link']}>
							{link.text}
						</a>
					</li>
				)
		}

		return linkContent
	})

	return (
		<nav>
			<ul className={cn(styles['nav-list'])}>{navItem}</ul>
		</nav>
	)
}

export default Navbar
