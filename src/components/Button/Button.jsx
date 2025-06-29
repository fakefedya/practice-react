import './Button.css'

function Button({ buttonText, className }) {
	const buttonClassName = 'button' + (className ? ' ' + className : '')

	return <button className={buttonClassName}>{buttonText}</button>
}

export default Button
