import { useState } from 'react'
import styles from './FavoriteButton.module.css'
import cn from 'classnames'

function FavoriteButton() {
	const [isFavorite, setIsFavorite] = useState(false)

	const buttonStatus = {
		icon: isFavorite ? '/icons/bookmark.svg' : '/icons/favorite.svg',
		text: isFavorite ? 'В избранном' : 'В избранное',
	}

	const handleClick = () => {
		setIsFavorite((prev) => !prev)
	}

	return (
		<button
			className={cn(styles['favorite-button'], {
				[styles.active]: isFavorite,
			})}
			onClick={handleClick}
		>
			<img
				src={buttonStatus.icon}
				alt='Иконка избранного'
				className={styles.icon}
			/>
			{buttonStatus.text}
		</button>
	)
}

export default FavoriteButton
