import { useEffect, useReducer, useRef } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './AuthForm.module.css'
import { INITIAL_STATE, formReducer } from './AuthForm.state'

function AuthForm({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
	const { isValid, values, isFormReadyToSubmit } = formState
	const nameRef = useRef()

	const focusError = (isValid) => {
		switch (true) {
			case !isValid.name:
				nameRef.current.focus()
				break
		}
	}

	useEffect(() => {
		let timerId
		if (!isValid.name) {
			focusError(isValid)
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' })
			}, 2000)
		}

		return () => {
			clearTimeout(timerId)
		}
	}, [isValid])

	useEffect(() => {
		if (isFormReadyToSubmit) {
			if (onSubmit) {
				onSubmit(values.name)
			}
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
		dispatchForm({ type: 'SUBMIT' })
	}

	return (
		<form className={styles['auth-form']} onSubmit={authRequest}>
			<div className={styles['auth-wrapper']}>
				<h1>Вход</h1>
				<Input
					type='text'
					name='name'
					value={values.name}
					ref={nameRef}
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
