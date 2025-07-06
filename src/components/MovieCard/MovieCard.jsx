import classNames from 'classnames'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import styles from './MovieCard.module.css'
import cn from 'classnames'

function MovieCard({ title, rating, cover }) {
	const coverPath = '/movie-covers/' + cover + '.png'

	return (
		<div className={cn(styles.card)}>
			<div className={cn(styles['card-wrapper'])}>
				<span className={cn(styles['card-rating'])}>
					<img
						className={cn(styles['card-icon'])}
						src='/icons/rating.svg'
						alt='Иконка рейтинга'
					/>
					{rating}
				</span>
				<div>
					<img src={coverPath} alt='Обложка фильма' />
				</div>
				<div className={cn(styles['card-info'])}>
					<h2 className={cn(styles['info-title'])}>{title}</h2>
				</div>
				<div>
					<FavoriteButton />
				</div>
			</div>
		</div>
	)
}

export default MovieCard
