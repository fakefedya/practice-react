import style from './Logo.module.css'
import cn from 'classnames'

function Logo() {
	return (
		<div className={cn(style['header-logo'])}>
			<a className={cn(style['logo-link'])} href='/'>
				<img
					className={cn(style['logo-icon'])}
					src='/icons/logo.svg'
					alt='Изображение лого'
				/>
			</a>
		</div>
	)
}

export default Logo
