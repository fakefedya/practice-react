import styles from './Logo.module.css'
import cn from 'classnames'

function Logo() {
	return (
		<div className={cn(styles['header-logo'])}>
			<a className={cn(styles['logo-link'])} href='/'>
				<img
					className={cn(styles['logo-icon'])}
					src='/icons/logo.svg'
					alt='Изображение лого'
				/>
			</a>
		</div>
	)
}

export default Logo
