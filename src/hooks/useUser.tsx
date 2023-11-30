import { userContext } from "../contexts/user"
import { useContext } from "react"
import auth from '../user'

export const useUser = () => {
    const {user, setUser} = useContext(userContext)
    const login = async () => {
        const user = await auth()
        setUser(user)
    }
    const logout = () => setUser(null)
    return {user, login, logout}
}