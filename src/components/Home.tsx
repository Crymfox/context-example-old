import { useUser } from "../hooks/useUser"

const Home = () => {
    const {user, login, logout} = useUser()
    return (
        <>
            <h1>This is the Home page</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            {
                user ? (
                    <button onClick={logout}>logout</button>
                ) : (
                    <button onClick={login}>login</button>
                )
            }
        </>
    )
}

export default Home