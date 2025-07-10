import { useState, useEffect } from 'react'

export function useAuth() {
	const [users, setUsers] = useState([])
	const [userName, setUserName] = useState('')

	useEffect(() => {
		const savedUsers = localStorage.getItem('reactProjectUsers')

		if (savedUsers) {
			const parsedUsers = JSON.parse(savedUsers)
			setUsers(parsedUsers)
			const latestUser = parsedUsers.find((user) => user.isLogined)
			if (latestUser) {
				setUserName(latestUser.name)
			}
		}
	}, [])

	const handleLogin = (newName) => {
		const trimmedName = newName.trim()
		if (!trimmedName) return

		// Проверяем, существует ли пользователь с таким именем
		const existingUser = users.find((user) => user.name === trimmedName)
		let updatedUsers

		if (existingUser) {
			// Если пользователь существует, обновляем только isLogined
			updatedUsers = users.map((user) =>
				user.name === trimmedName ? { ...user, isLogined: true } : user
			)
		} else {
			// Если пользователя нет, добавляем нового
			updatedUsers = [...users, { name: trimmedName, isLogined: true }]
		}

		setUsers(updatedUsers)
		setUserName(trimmedName)
		localStorage.setItem('reactProjectUsers', JSON.stringify(updatedUsers))
	}

	const handleLogout = () => {
		if (userName && users.length > 0) {
			const updatedUsers = users.map((user) =>
				user.name === userName ? { ...user, isLogined: false } : user
			)
			setUsers(updatedUsers)
			setUserName('')
			localStorage.setItem('reactProjectUsers', JSON.stringify(updatedUsers))
		}
	}

	return { users, userName, handleLogin, handleLogout }
}
