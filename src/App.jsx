import './App.css'
import Button from './components/Button/Button'
import Headline from './components/Headline/Headline'
import Paragraph from './components/Paragraph/Paragraph'
import Header from './Layout/Header/Header'
import Main from './Layout/Main/Main'

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
					<Button buttonText={'Искать'} className={'headline__search'} />
				</Headline>
			</Main>
		</div>
	)
}

export default App
