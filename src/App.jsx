import './App.css'
import Header from './Layout/Header/Header'
import Main from './Layout/Main/Main'
import Headline from './components/Headline/Headline'
import Paragraph from './components/Paragraph/Paragraph'
import Button from './components/Button/Button'
import Search from './components/Search/Search'
import MovieList from './components/MovieList/MovieList'

function App() {
	const MOVIE_LIST = [
		{
			key: 1,
			title: 'Black Widow',
			rating: 324,
			cover: 'black-widow',
		},
		{
			key: 2,
			title: 'Shang Chi',
			rating: 124,
			cover: 'shang-chi',
		},
		{
			key: 3,
			title: 'Loki',
			rating: 235,
			cover: 'loki',
		},
		{
			key: 4,
			title: 'How I Met Your Mother',
			rating: 123,
			cover: 'how-i-met-your-mother',
		},
		{
			key: 5,
			title: 'Money Heist',
			rating: 8125,
			cover: 'money-heist',
		},
		{
			key: 6,
			title: 'Friends',
			rating: 123,
			cover: 'friends',
		},
		{
			key: 7,
			title: 'The Big Bang Theory',
			rating: 1211,
			cover: 'the-big-bang-theory',
		},
		{
			key: 8,
			title: 'Two And a Half Men',
			rating: 456,
			cover: 'two-and-a-half-men',
		},
	]

	return (
		<div className='app'>
			<Header />
			<Main>
				<Headline>
					<h1>Поиск</h1>
					<Paragraph
						paragraphText={
							'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
						}
						className={'subheading'}
					/>
					<div className='headline__action'>
						<Search
							className={'headline-input'}
							placeholder={'Введите название'}
						/>
						<Button buttonText={'Искать'} className={'search-button'} />
					</div>
				</Headline>
				<MovieList movieList={MOVIE_LIST} />
			</Main>
		</div>
	)
}

export default App
