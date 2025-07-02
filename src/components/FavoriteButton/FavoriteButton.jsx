import { useState } from 'react'
import './FavoriteButton.css'

function FavoriteButton() {
	const [isFavorite, setIsFavorite] = useState(false)

	const buttonStatus = {
		icon: isFavorite ? '/icons/bookmark.svg' : '/icons/favorite.svg',
		text: isFavorite ? 'В избранном' : 'В избранное',
		className: `favorite__button${
			isFavorite ? ' favorite__button--active' : ''
		}`,
	}

	const handleClick = () => {
		setIsFavorite((prev) => !prev)
	}

	return (
		<button className={buttonStatus.className} onClick={handleClick}>
			<img
				src={buttonStatus.icon}
				alt='Иконка избранного'
				className='favorite__button-icon'
			/>
			{buttonStatus.text}
		</button>
	)
}

export default FavoriteButton
