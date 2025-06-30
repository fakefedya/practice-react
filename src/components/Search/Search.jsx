import './Search.css'

function Search({ className, placeholder }) {
	const inputClassName = 'input' + (className ? ' ' + className : '')

	if (className === 'headline__action-input') {
		return (
			<div className='input__wrapper'>
				<img
					className='input__wrapper-search-icon'
					src='/public/icons/search.svg'
					alt='Иконка поиска'
				/>
				<input
					className={inputClassName}
					type='text'
					placeholder={placeholder}
				/>
			</div>
		)
	}

	return (
		<div className='input__wrapper'>
			<input className={inputClassName} type='text' placeholder={placeholder} />
		</div>
	)
}

export default Search
