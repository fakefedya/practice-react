import styles from './Input.module.css'
import cn from 'classnames'

function Input({ className, placeholder, isValid = true, ...props }) {
	const isHeadlineInput = className === 'headline-input'

	return (
		<div className={cn(styles['input-wrapper'])}>
			{isHeadlineInput && (
				<img
					className={styles['input-icon']}
					src='/icons/search.svg'
					alt='Иконка поиска'
				/>
			)}
			<input
				{...props}
				className={cn(styles.input, className, {
					[styles['invalid']]: !isValid,
					[styles['headline-input']]: isHeadlineInput,
				})}
				type='text'
				placeholder={placeholder}
			/>
		</div>
	)
}

export default Input
