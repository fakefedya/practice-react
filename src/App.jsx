import './App.css'
import Button from './components/Button/Button'
import Header from './Layout/Header/Header'
import Main from './Layout/Main/Main'

function App() {
	return (
		<div className='app'>
			<Header />
			<Main>
				<Button buttonText={'Искать'} className={'search-button'} />
			</Main>
		</div>
	)
}

export default App
