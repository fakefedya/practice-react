import { useContext } from 'react'
import { UserContext } from '../context/user-context'

export const useUser = () => {
	const context = useContext(UserContext)

	if (!context) {
		throw new Error('Ошибка, хук должен использоваться с UserProvider')
	}
	return context
}
