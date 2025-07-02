import { useState } from 'react'
import './Button.css'

function Button({ buttonText, className }) {
	const [isActive, setIsActive] = useState(false)

	const buttonClassName = `button${className ? ' ' + className : ''}${
		isActive ? ' button--active' : ''
	}`

	const handleClick = () => {
		setIsActive((prev) => !prev)
		console.log(`Стейт кнопки изменился: ${isActive}`)
	}

	return (
		<button className={buttonClassName} onClick={handleClick}>
			{buttonText}
		</button>
	)
}

export default Button
