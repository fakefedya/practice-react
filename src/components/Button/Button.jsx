import styles from './Button.module.css'
import cn from 'classnames'

function Button({ text, className, image, ...props }) {
	return (
		<button {...props} className={cn(className, styles['button'])}>
			{text}
			{image}
		</button>
	)
}

export default Button
