import { useUser } from "../hooks/useUser"

const About = () => {
    const {user} = useUser()
    return (
        <>
            <h1>About us, who are we?</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
    )
}

export default About