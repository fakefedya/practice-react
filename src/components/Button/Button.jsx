import styles from './Button.module.css'
import cn from 'classnames'

function Button({ text, className }) {
	return <button className={cn(className, styles['button'])}>{text}</button>
}

export default Button
