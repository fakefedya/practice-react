import styles from './Search.module.css'
import cn from 'classnames'

function Search({ className, placeholder }) {
	const isHeadlineInput = className === 'headline-input'

	return (
		<div className={cn(styles['input-wrapper'], className)}>
			{isHeadlineInput && (
				<img
					className={styles['input-icon']}
					src='/icons/search.svg'
					alt='Иконка поиска'
				/>
			)}
			<input
				className={cn(styles.input, {
					[styles['headline-input']]: isHeadlineInput,
				})}
				type='text'
				placeholder={placeholder}
			/>
		</div>
	)
}

export default Search
