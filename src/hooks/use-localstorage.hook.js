import { useState, useEffect } from 'react'

export function useLocalStorage(key) {
	const [data, setData] = useState(() => {
		const saved = localStorage.getItem(key)
		return saved ? JSON.parse(saved) : []
	})

	useEffect(() => {
		const res = localStorage.getItem(key)
		if (res) {
			setData(JSON.parse(res))
		}
	}, [])

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData))
		setData(newData)
	}

	return [data, saveData]
}
