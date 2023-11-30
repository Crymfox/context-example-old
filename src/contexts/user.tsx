import { createContext, useState } from "react"

export const userContext = createContext({} as any)

export const Provider = ({children}: any) => {
    const [user, setUser] = useState(null)
    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}