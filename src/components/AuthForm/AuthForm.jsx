import { useEffect, useReducer } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './AuthForm.module.css'
import { INITIAL_STATE, formReducer } from './AuthForm.state'
// import cn from 'classnames'

function AuthForm() {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
	const { isValid, values, isFormReadyToSubmit } = formState

	useEffect(() => {
		let timerId
		if (!isValid.name) {
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' })
				console.log('Очистка состояния!')
			}, 2000)
		}

		return () => {
			clearTimeout(timerId)
		}
	}, [isValid])

	useEffect(() => {
		if (isFormReadyToSubmit) {
			// onSubmit(values)
			dispatchForm({ type: 'CLEAR' })
		}
	}, [isFormReadyToSubmit])

	const onChange = (e) => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: {
				[e.target.name]: e.target.value,
			},
		})
	}

	const authRequest = (e) => {
		e.preventDefault()
		console.log('Вызов из компонента AuthForm')
		dispatchForm({ type: 'SUBMIT' })
		console.log('Форма отправляется')
	}

	return (
		<form className={styles['auth-form']} onSubmit={authRequest}>
			<div className={styles['auth-wrapper']}>
				<h1>Вход</h1>
				<Input
					type='text'
					name='name'
					value={values.name}
					onChange={onChange}
					className={styles['auth-input']}
					placeholder='Ваше имя'
					isValid={isValid.name}
				/>
				<Button text='Войти в профиль' className={styles['auth-button']} />
			</div>
		</form>
	)
}

export default AuthForm
