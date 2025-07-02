import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

function MovieList({ movieList }) {
	if (movieList.length === 0) {
		return <p>Фильмы отсутствуют</p>
	}
	return (
		<div className='movie__list'>
			{movieList.map((el) => (
				<MovieCard
					key={el.key}
					title={el.title}
					rating={el.rating}
					cover={el.cover}
				/>
			))}
		</div>
	)
}

export default MovieList
