import { useReducer, useEffect } from 'react'

const LOCALSTORAGE_KEY = 'reactProjectUsers'

const INITIAL_STATE = {
	users: [],
	userName: '',
}

function authReducer(state, action) {
	switch (action.type) {
		case 'LOAD_FROM_STORAGE': {
			const savedUsers = localStorage.getItem(LOCALSTORAGE_KEY)
			if (!savedUsers) return state

			const parsedUsers = JSON.parse(savedUsers)
			const latestUser = parsedUsers.find((user) => user.isLogined)

			return {
				users: parsedUsers,
				userName: latestUser ? latestUser.name : '',
			}
		}
		case 'LOGIN': {
			const trimmedName = action.name.trim()
			if (!trimmedName) return state
			const existingUser = state.users.find((user) => user.name === trimmedName)
			const userId = Date.now().toString()
			const updatedUsers = existingUser
				? state.users.map((user) =>
						user.name === trimmedName ? { ...user, isLogined: true } : user
				  )
				: [
						...state.users,
						{
							id: userId,
							name: trimmedName,
							isLogined: true,
							favoriteMovies: [],
						},
				  ]
			localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedUsers))
			return {
				users: updatedUsers,
				userName: trimmedName,
			}
		}
		case 'LOGOUT': {
			if (!state.userName || state.users.length === 0) return state
			const updatedUsers = state.users.map((user) =>
				user.name === state.userName ? { ...user, isLogined: false } : user
			)
			localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedUsers))
			return {
				users: updatedUsers,
				userName: '',
			}
		}
		case 'ADD_FAVORITE_MOVIE': {
			// Добавляем фильмы в избранное
			break
		}
		default:
			return state
	}
}

export function useAuth() {
	const [state, dispatch] = useReducer(authReducer, INITIAL_STATE)

	useEffect(() => {
		dispatch({ type: 'LOAD_FROM_STORAGE' })
	}, [])

	const handleLogin = (name) => {
		dispatch({ type: 'LOGIN', name })
	}

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' })
	}

	return {
		users: state.users,
		userName: state.userName,
		handleLogin,
		handleLogout,
	}
}
