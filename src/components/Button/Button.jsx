import { useState } from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

function Button({ buttonText, className }) {
	const [isActive, setIsActive] = useState(false)

	const handleClick = () => {
		setIsActive((prev) => !prev)
	}

	return (
		<button
			className={cn(styles['button'], styles[className], {
				[styles['active']]: isActive,
			})}
			onClick={handleClick}
		>
			{buttonText}
		</button>
	)
}

export default Button
