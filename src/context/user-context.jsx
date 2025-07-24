// src/context/UserContext.js
import { createContext } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext()

export const UserProvider = ({ children, value }) => {
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
