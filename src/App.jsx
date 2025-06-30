import './App.css'
import Header from './Layout/Header/Header'
import Main from './Layout/Main/Main'
import Headline from './components/Headline/Headline'
import Paragraph from './components/Paragraph/Paragraph'
import Button from './components/Button/Button'

function App() {
	return (
		<div className='app'>
			<Header />
			<Main>
				<main className='main'>
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
				</main>
			</Main>
		</div>
	)
}

export default App
