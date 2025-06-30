import FavoriteButton from '../FavoriteButton/FavoriteButton'
import './MovieCard.css'

function MovieCard({ title, rating, cover }) {
	const coverPath = '/movie-covers/' + cover + '.png'

	return (
		<div className='movie__card'>
			<div className='movie__card-wrapper'>
				<span className='movie__card-rating'>
					<img
						className='movie__card-rating-icon'
						src='/icons/rating.svg'
						alt='Иконка рейтинга'
					/>
					{rating}
				</span>
				<div className='movie-card__cover'>
					<img src={coverPath} alt='Обложка фильма' />
				</div>
				<div className='movie__card-info'>
					<h2 className='movie__card-info-title'>{title}</h2>
				</div>
				<div className='movie__card-action'>
					<FavoriteButton />
				</div>
			</div>
		</div>
	)
}

export default MovieCard
