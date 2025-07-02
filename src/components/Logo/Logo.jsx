import './Logo.css'

function Logo() {
	return (
		<div className='header__logo'>
			<a className='header__logo-link' href='/'>
				<img
					className='header__logo-image'
					src='/icons/logo.svg'
					alt='Изображение лого'
				/>
			</a>
		</div>
	)
}

export default Logo
