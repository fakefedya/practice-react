import './App.css'
import Header from './Layout/Header/Header'
import Main from './Layout/Main/Main'
import Headline from './components/Headline/Headline'
import Paragraph from './components/Paragraph/Paragraph'
import Button from './components/Button/Button'
import Search from './components/Search/Search'

function App() {
	return (
		<div className='app'>
			<Header />
			<Main>
				<Headline>
					<h1 className='headline__heading'>Поиск</h1>
					<Paragraph
						paragraphText={
							'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
						}
						className={'headline__subheading'}
					/>
					<div className='headline__action'>
						<Search
							className={'headline__action-input'}
							placeholder={'Введите название'}
						/>
						<Button
							buttonText={'Искать'}
							className={'headline__search-button'}
						/>
					</div>
				</Headline>
			</Main>
		</div>
	)
}

export default App
